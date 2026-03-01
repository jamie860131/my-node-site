import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI } from '@google/genai';

// Initialize Gemini API
// Note: In a production environment, this should be handled via a backend proxy 
// to protect the API key. For this static demo, we use the env var directly.
const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const SYSTEM_INSTRUCTION = `You are the official AI assistant for Hartford Motorcycle (Taiwan). 
Your tone is professional, passionate, and helpful.
You can answer questions about:
1. Our Models: VR-220HX (Off-road), UK450 (Classic), Mini Elite 150 (Mini), Classic S 250i, Cappuccino 150.
2. Company Info: Established in 1995, "Heart for You" philosophy, based in Taichung, Taiwan.
3. Services: Maintenance, finding dealers (tell them to check the dealer locator on the site).

If asked about prices, say that prices vary by region and dealer, and recommend contacting a local dealer.
Keep answers concise (under 3 sentences if possible).`;

interface Message {
  role: 'user' | 'model';
  text: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hello! I can help you with questions about Hartford motorcycles. How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      if (!ai) throw new Error("API Key not configured");

      const chat = ai.chats.create({
        model: 'gemini-2.5-flash-latest',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
        history: messages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }))
      });

      const result = await chat.sendMessage({ message: userMessage });
      const response = result.text; // Access .text property directly

      if (response) {
        setMessages(prev => [...prev, { role: 'model', text: response }]);
      } else {
        throw new Error("Empty response");
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 bg-zinc-900 border border-zinc-800 shadow-2xl rounded-2xl overflow-hidden z-50 flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="bg-red-600 p-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                <h3 className="font-bold text-white">Hartford Assistant</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-900">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.role === 'user' 
                        ? 'bg-red-600 text-white rounded-tr-none' 
                        : 'bg-zinc-800 text-gray-200 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-zinc-800 p-3 rounded-2xl rounded-tl-none">
                    <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-zinc-950 border-t border-zinc-800">
              <div className="flex items-center bg-zinc-900 rounded-full border border-zinc-800 px-4 py-2 focus-within:border-red-600 transition-colors">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask about our bikes..."
                  className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm"
                  disabled={isLoading}
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="ml-2 text-red-600 hover:text-red-500 disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
              {!apiKey && (
                <p className="text-xs text-red-500 mt-2 text-center">
                  API Key missing. Chat unavailable.
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-red-600 text-white rounded-full shadow-lg flex items-center justify-center z-50 hover:bg-red-700 transition-colors"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </>
  );
}
