import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h2 className="text-red-600 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">Heart for You</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            RIDE THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">LEGEND</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
            Since 1995, Hartford has been crafting motorcycles that blend classic aesthetics with modern performance. Experience the freedom of the open road.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#models" 
              className="px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-wider rounded-none hover:bg-red-700 transition-colors flex items-center justify-center group"
            >
              View Models
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="px-8 py-4 border border-white text-white font-bold uppercase tracking-wider rounded-none hover:bg-white hover:text-black transition-colors flex items-center justify-center"
            >
              Find Dealer
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-gray-400 text-xs uppercase tracking-widest mb-2">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-12 bg-gradient-to-b from-red-600 to-transparent"
        />
      </motion.div>
    </div>
  );
}
