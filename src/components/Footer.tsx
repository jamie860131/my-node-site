import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-950 text-white pt-20 pb-10 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold tracking-tighter mb-6">HARTFORD</h3>
            <p className="text-gray-400 max-w-sm mb-8">
              Crafting premium motorcycles for the passionate rider since 1995. Experience the thrill of the ride with Hartford.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-500">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-red-600 shrink-0" />
                <span>No. 3, Industrial Park 36th Rd, Xitun District, Taichung City, Taiwan 407</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-red-600 shrink-0" />
                <span>+886-4-2359-9511</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-red-600 shrink-0" />
                <span>service@hartford-motors.com.tw</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-500">Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Dealers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Hartford Industrial Co., Ltd. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for the Ride.</p>
        </div>
      </div>
    </footer>
  );
}
