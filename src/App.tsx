/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BikeGrid from './components/BikeGrid';
import About from './components/About';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-red-600 selection:text-white">
      <Navbar />
      <Hero />
      <BikeGrid />
      <About />
      <Footer />
      <ChatWidget />
    </div>
  );
}
