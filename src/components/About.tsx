import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-900/20 skew-x-12 transform translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-red-600 font-bold tracking-widest uppercase mb-4 text-sm">About Hartford</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">HEART FOR YOU</h3>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Hartford's founding purpose is based on the passion for motorcycles. Adhering to the spirit of "Heart for You", 
                Hartford continues to research and innovate, with high quality, high standards and humanization as design goals.
              </p>
              <p>
                We are committed to developing motorcycles that best meet the needs of today's market and are diverse, 
                so that all users can enjoy the convenience and fun that Hartford products bring to everyone, adding more wonderful moments to life.
              </p>
              <p>
                Hartford is also actively developing domestic and foreign markets, using high-quality professional technology, 
                innovative R&D spirit, excellent product quality, and customer-oriented service enthusiasm.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <span className="block text-4xl font-bold text-white mb-1">1995</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Established</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-white mb-1">Global</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Distribution</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-zinc-800 rounded-none overflow-hidden relative">
               <img 
                 src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                 alt="Hartford Factory" 
                 className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
               />
               <div className="absolute inset-0 border-2 border-red-600/20 m-4 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
