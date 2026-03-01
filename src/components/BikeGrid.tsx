import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const bikes = [
  {
    id: 'vr-220hx',
    name: 'VR-220HX',
    category: 'Off-Road',
    image: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: '223cc | 5-Speed | Air Cooled'
  },
  {
    id: 'uk450',
    name: 'UK450',
    category: 'Classic',
    image: '/uk450.png',
    specs: '445cc | 6-Speed | Oil Cooled'
  },
  {
    id: 'mini-elite-150',
    name: 'Mini Elite 150',
    category: 'Mini',
    image: '/mini-elite-150.png',
    specs: '150cc | CVT | Fuel Injection'
  },
  {
    id: 'classic-s-250i',
    name: 'Classic S 250i',
    category: 'Street',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: '250cc | 6-Speed | ABS'
  }
];

export default function BikeGrid() {
  return (
    <section id="models" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-red-600 font-bold tracking-widest uppercase mb-2 text-sm">Our Lineup</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">Master the Road</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {bikes.map((bike, index) => (
            <motion.div
              key={bike.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden bg-black aspect-[4/3] cursor-pointer"
            >
              <div className="absolute inset-0 bg-gray-800">
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-red-500 text-xs font-bold uppercase tracking-widest mb-2 block">{bike.category}</span>
                  <h4 className="text-3xl font-bold text-white mb-2">{bike.name}</h4>
                  <p className="text-gray-400 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{bike.specs}</p>

                  <div className="flex items-center text-white text-sm font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    Explore <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
