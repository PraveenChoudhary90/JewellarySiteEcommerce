import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react'; // Icons for better UI

const MegaHero = () => {
  const brands = [
    "Atlas", "Aurate", "Cartier", "Elsa Peretti", "Gucci", 
    "Louis Vuitton", "Paloma Picasso", "Prada", "Swarovski", "Tiffany"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-7xl mx-auto bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-neutral-100 flex flex-col md:flex-row overflow-hidden rounded-sm"
      style={{ minHeight: '550px' }}
    >
      {/* 1. Brands Section - Refined Typography */}
      <div className="w-full md:w-[22%] p-8 lg:p-12 border-b md:border-b-0 md:border-r border-neutral-50 bg-[#FBFBFB]">
        <h3 className="text-[10px] font-bold tracking-[0.4em] mb-10 text-neutral-400 uppercase">
          Curated Brands
        </h3>
        <ul className="space-y-5">
          {brands.map((brand) => (
            <li
              key={brand}
              className="text-neutral-500 text-xs tracking-widest hover:text-black cursor-pointer transition-all duration-300 flex items-center group font-light"
            >
              <span className="w-0 h-[1px] bg-black transition-all duration-500 group-hover:w-6 mr-0 group-hover:mr-3"></span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">{brand}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 2. Promo Banner Section - Immersive Design */}
      <div className="w-full md:w-[43%] relative group cursor-pointer overflow-hidden min-h-[400px] md:h-auto">
        <img
          src="https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=800&auto=format&fit=crop&q=80"
          alt="Promo Jewelry"
          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
        />
        {/* Modern Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500 flex flex-col items-center justify-center p-8">
          <div className="text-center space-y-6 max-w-xs border border-white/20 p-10 backdrop-blur-[2px] transform group-hover:border-white/40 transition-all duration-700">
            <p className="text-white/80 text-[10px] tracking-[0.5em] uppercase font-light italic">Limited Edition</p>
            <h2 className="text-3xl md:text-5xl font-extralight text-white leading-[1.1] tracking-tight">
              Gift of <br /> <span className="font-serif italic">Elegance</span>
            </h2>
            <div className="pt-4">
               <button className="bg-white text-black px-10 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-500 shadow-xl">
                 Shop Collection
               </button>
            </div>
            <p className="text-white/60 text-[9px] tracking-widest uppercase pt-2">Free Global Shipping</p>
          </div>
        </div>
      </div>

      {/* 3. Featured Products Section - Clean Layout */}
      <div className="w-full md:w-[35%] p-8 lg:p-12 flex flex-col justify-between bg-white">
        <div>
          <h3 className="text-[10px] font-bold tracking-[0.4em] mb-12 text-neutral-400 uppercase">
            Must Haves
          </h3>
          
          <div className="space-y-12">
            {/* Item 1 */}
            <div className="flex items-start gap-6 group cursor-pointer">
              <div className="relative w-24 h-24 lg:w-28 lg:h-28 bg-[#F5F5F5] overflow-hidden flex-shrink-0 rounded-sm">
                <span className="absolute top-2 left-2 bg-neutral-900 text-white text-[7px] font-bold px-2 py-1 z-10 tracking-widest uppercase">New</span>
                <img src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" alt="brooch" />
              </div>
              <div className="flex flex-col h-full py-1">
                <p className="text-[9px] text-neutral-400 uppercase tracking-[0.2em] mb-2 font-medium">Accessories • Other</p>
                <h4 className="text-sm font-light text-neutral-800 tracking-wide group-hover:text-black transition-colors">Fleur De Lis Key Brooch</h4>
                <p className="text-lg font-light mt-3 text-neutral-900 tracking-tight">$750.00</p>
                <button className="mt-auto flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-black opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ShoppingBag size={12} /> Add to Bag
                </button>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-6 group cursor-pointer">
              <div className="relative w-24 h-24 lg:w-28 lg:h-28 bg-[#F5F5F5] overflow-hidden flex-shrink-0 rounded-sm">
                <span className="absolute top-2 left-2 bg-neutral-900 text-white text-[7px] font-bold px-2 py-1 z-10 tracking-widest uppercase">Classic</span>
                <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" alt="necklace" />
              </div>
              <div className="flex flex-col h-full py-1">
                <p className="text-[9px] text-neutral-400 uppercase tracking-[0.2em] mb-2 font-medium">Necklaces • Luxury</p>
                <h4 className="text-sm font-light text-neutral-800 tracking-wide group-hover:text-black transition-colors">Layer Cake Necklace Set</h4>
                <p className="text-lg font-light mt-3 text-neutral-900 tracking-tight">$1,400.00</p>
                <button className="mt-auto flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-black opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ShoppingBag size={12} /> Add to Bag
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-12 pt-8 border-t border-neutral-50 flex items-center justify-between">
           <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-300 font-medium">Spring SS26</span>
           <a href="#" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black group">
             Explore All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
           </a>
        </div>
      </div>
    </motion.div>
  );
};

export default MegaHero;