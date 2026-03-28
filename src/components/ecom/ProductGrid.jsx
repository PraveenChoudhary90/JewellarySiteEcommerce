import React, { useState } from 'react';

const ProductGrid = () => {
  const [activeTab, setActiveTab] = useState('NEW ARRIVED');

  const tabs = ['NEW ARRIVED', 'FEATURED', 'ON A SALE'];

  // Mock data matching your exact screenshot
  const products = [
    {
      id: 1,
      name: "Fleur De Lis Key Brooch",
      categories: ["BROOCHES", "OTHER"],
      description: "Brilliant beacons of optimism and hope, Tiffany Keys are radiant symbols of a bright future.",
      price: "$750",
      badges: ["NEW"],
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600" // Key placeholder
    },
    {
      id: 2,
      name: "Starfish Brooch",
      categories: ["BROOCHES", "OTHER"],
      description: "The starfish evokes life beneath the waves and in the celestial heavens. Brooch in platinum with pavé diamonds.",
      price: "$850",
      badges: ["NEW", "FEATURED"],
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600" // Placeholder
    },
    {
      id: 3,
      name: "Layer Cake Necklace Set",
      categories: ["SETS"],
      description: "Fine jewelry deserves fair prices. And so do you. All of our jewelry is born, raised, and handmade in NYC.",
      price: "$1,400",
      badges: ["NEW"],
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600" // Necklace placeholder
    },
    {
      id: 4,
      name: "The Texture Ring Set",
      categories: ["SETS"],
      description: "You play with patterns, now it's time to texturize. Our Mini Infinity Ring meets a Modern Cigar Band to create the fashion-forward jewelry pair you never knew you needed.",
      price: "$2,500",
      badges: ["NEW"],
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&q=80&w=600" // Ring placeholder
    }
  ];

  return (
    <section className="w-full font-sans bg-white pb-24">
      
      {/* Section Title */}
      <div className="py-14 text-center">
        <h2 className="text-[38px] font-light text-[#111111] tracking-wide">
          Luxury Jewelry
        </h2>
      </div>

      {/* Tabs Menu */}
      <div className="w-full border-y border-gray-100 flex justify-center">
        <div className="flex gap-10 md:gap-16 pt-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-[11px] tracking-[0.15em] uppercase transition-colors relative
                ${activeTab === tab 
                  ? 'text-[#111111] font-semibold' 
                  : 'text-gray-400 font-medium hover:text-[#111111]'
                }
              `}
            >
              {tab}
              {/* Active Tab Underline */}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#111111]"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer flex flex-col h-full">
              
              {/* Image Container */}
              <div className="relative aspect-square bg-[#F7F7F7] flex items-center justify-center p-8 mb-6 overflow-hidden">
                {/* Badges */}
                <div className="absolute top-4 right-4 flex gap-1 z-10">
                  {product.badges.map((badge, index) => (
                    <span 
                      key={index} 
                      className="bg-[#111111] text-white text-[9px] font-semibold tracking-widest px-2 py-1 uppercase"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Product Image with Hover Zoom */}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-col flex-grow">
                {/* Categories */}
                <div className="text-[10px] tracking-[0.2em] text-[#C19A5B] uppercase mb-2">
                  {product.categories.join(' · ')}
                </div>

                {/* Title */}
                <h3 className="text-[19px] font-light text-[#111111] mb-3 group-hover:text-[#C19A5B] transition-colors duration-300">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-[13px] text-gray-500 font-light leading-relaxed mb-5 line-clamp-3">
                  {product.description}
                </p>

                {/* Price (Pushed to bottom using mt-auto so they all align perfectly) */}
                <div className="mt-auto text-[17px] text-[#111111]">
                  {product.price}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ProductGrid;