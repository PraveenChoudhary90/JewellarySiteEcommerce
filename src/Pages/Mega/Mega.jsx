import React from 'react';
import { motion } from 'framer-motion';

const Mega = () => {
  const brands = [
    "Atlas", "Aurate", "Cartier", "Elsa Peretti", "Gucci", 
    "Louis Vuitton", "Paloma Picasso", "Prada", "Swarovski", "Tiffany"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-6xl mx-auto bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col md:flex-row overflow-hidden"
      style={{ minHeight: '450px' }}
    >
      {/* 1. Brands Section */}
      <div className="w-full md:w-1/4 p-6 md:p-10 border-b md:border-b-0 md:border-r border-gray-50 bg-gray-50/30">
        <h3 className="text-xl md:text-xl font-light tracking-[0.2em] mb-6 md:mb-8 border-b pb-2 md:pb-4 text-gray-800">BRANDS</h3>
        <ul className="space-y-3 md:space-y-4">
          {brands.map((brand) => (
            <li
              key={brand}
              className="text-gray-500 text-sm hover:text-black cursor-pointer transition-all hover:translate-x-2 flex items-center group"
            >
              <span className="w-0 h-[1px] bg-black transition-all group-hover:w-4 mr-0 group-hover:mr-2"></span>
              {brand}
            </li>
          ))}
        </ul>
      </div>

      {/* 2. Promo Banner Section */}
      <div className="w-full md:w-2/5 relative group cursor-pointer overflow-hidden h-64 md:h-auto">
        <img
          src="https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmVja2xhY2V8ZW58MHx8MHx8fDA%3D"
          alt="Promo Jewelry"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center p-6 md:p-8">
          <div className="border border-white/40 p-6 md:p-10 backdrop-blur-sm">
            <h2 className="text-2xl md:text-4xl font-extralight text-white leading-tight mb-4 md:mb-6">
              Order Today <br /> & Get <br /> <span className="font-medium">Free Delivery</span>
            </h2>
            <button className="bg-white text-black px-6 md:px-8 py-2 md:py-3 text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* 3. Featured Products Section */}
      <div className="w-full md:w-1/3 p-6 md:p-10 flex flex-col justify-between">
        <div className="space-y-6 md:space-y-10">
          {/* Item 1 */}
          <div className="flex items-center gap-4 md:gap-6 group cursor-pointer">
            <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gray-100 overflow-hidden flex-shrink-0">
              <span className="absolute top-1 left-1 bg-black text-white text-[8px] px-2 py-0.5 z-10">NEW</span>
              <img src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=300" className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt="brooch" />
            </div>
            <div>
              <p className="text-[8px] md:text-[10px] text-gray-400 uppercase tracking-widest mb-1">Brooches • Other</p>
              <h4 className="text-sm md:text-sm font-medium text-gray-800">Fleur De Lis Key Brooch</h4>
              <p className="text-lg font-light mt-2 text-gray-900">$750</p>
              <button className="mt-2 text-[8px] md:text-[10px] border-b border-black uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">Add to cart</button>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-4 md:gap-6 group cursor-pointer">
            <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gray-100 overflow-hidden flex-shrink-0">
              <span className="absolute top-1 left-1 bg-black text-white text-[8px] px-2 py-0.5 z-10">FEATURED</span>
              <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300" className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt="necklace" />
            </div>
            <div>
              <p className="text-[8px] md:text-[10px] text-gray-400 uppercase tracking-widest mb-1">Sets • Luxury</p>
              <h4 className="text-sm md:text-sm font-medium text-gray-800">Layer Cake Necklace Set</h4>
              <p className="text-lg font-light mt-2 text-gray-900">$1,400</p>
              <button className="mt-2 text-[8px] md:text-[10px] border-b border-black uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">Add to cart</button>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-gray-400 gap-2 md:gap-0">
           <span>Spring Collection 2026</span>
           <a href="#" className="text-black font-bold">View All Items</a>
        </div>
      </div>
    </motion.div>
  );
};

export default Mega;