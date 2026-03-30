import React, { useState } from 'react';

const ProductGrid = () => {
  const [activeTab, setActiveTab] = useState('NEW ARRIVED');

  const tabs = ['NEW ARRIVED', 'FEATURED', 'ON SALE'];

  const products = [
  {
    id: 1,
    title: "Fleur De Lis Key Brooch",
    category: "BROOCHES · OTHER",
    description: "Brilliant beacons of optimism and hope, Tiffany Keys are radiant symbols of a bright future.",
    price: "$750",
    badges: ["NEW", "FEATURED"],
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    title: "Starfish Brooch",
    category: "BROOCHES · OTHER",
    description: "The starfish evokes life beneath the waves and in the celestial heavens. Brooch in platinum with pavé diamonds.",
    price: "$850",
    badges: ["NEW", "SALE"],
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    title: "Layer Cake Necklace Set",
    category: "SETS",
    description: "Fine jewelry deserves fair prices. And so do you. All of our jewelry is born, raised, and handmade in NYC.",
    price: "$1,400",
    badges: ["NEW", "FEATURED"],
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    title: "The Texture Ring Set",
    category: "SETS",
    description: "Mini Infinity Ring meets Modern Cigar Band for the perfect pair.",
    price: "$2,500",
    badges: ["NEW"],
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    title: "Color By The Yard Emerald Pendant",
    category: "NECKLACES",
    description: "Style this adjustable chain with other pendants of varying lengths for a look that's sure to turn heads.",
    price: "$1,700 — $1,800",
    badges: ["NEW", "SALE"],
    image: "https://plus.unsplash.com/premium_photo-1709033404514-c3953af680b4?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 6,
    title: "Heart Locket",
    category: "LOCKET · OTHER",
    description: "This Tiffany locket will become your new favorite memento and cherished keepsake.",
    price: "$550",
    badges: ["NEW", "FEATURED"],
    image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 7,
    title: "Diamond Solitaire Ring",
    category: "RINGS",
    description: "A classic diamond ring that adds elegance to any outfit.",
    price: "$2,200",
    badges: ["NEW", "SALE"],
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 8,
    title: "Pearl Drop Earrings",
    category: "EARRINGS",
    description: "Elegant pearl earrings that are perfect for formal occasions.",
    price: "$1,000",
    badges: ["NEW"],
    image: "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 9,
    title: "Gold Choker",
    category: "NECKLACES",
    description: "Minimalist gold choker that pairs well with layered necklaces.",
    price: "$1,500",
    badges: ["NEW", "FEATURED"],
    image: "https://plus.unsplash.com/premium_photo-1661645473770-90d750452fa0?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 10,
    title: "Charm Bracelet",
    category: "BRACELETS",
    description: "Add your favorite charms for a personal touch.",
    price: "$750",
    badges: ["NEW", "SALE"],
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 11,
    title: "Stackable Rings Set",
    category: "RINGS",
    description: "Mix and match these delicate rings for a modern look.",
    price: "$1,200",
    badges: ["NEW"],
    image: "https://images.unsplash.com/photo-1631982690223-8aa4be0a2497?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 12,
    title: "Hoop Earrings",
    category: "EARRINGS",
    description: "Timeless hoops that elevate your everyday style.",
    price: "$650",
    badges: ["NEW", "FEATURED"],
    image: "https://images.unsplash.com/photo-1585960622850-ed33c41d6418?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 13,
    title: "Oval Sapphire Ring",
    category: "RINGS",
    description: "A beautiful sapphire set in a delicate gold band.",
    price: "$2,800",
    badges: ["NEW", "SALE"],
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 14,
    title: "Citrine Drop Earrings",
    category: "EARRINGS",
    description: "Sun-kissed citrine earrings for a touch of warmth.",
    price: "$1,100",
    badges: ["NEW"],
    image: "https://images.unsplash.com/photo-1615197419962-90f21da0956d?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 15,
    title: "Pearl Strand Necklace",
    category: "NECKLACES",
    description: "Classic pearls for timeless elegance.",
    price: "$2,000",
    badges: ["NEW", "FEATURED"],
    image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 16,
    title: "Emerald Tennis Bracelet",
    category: "BRACELETS",
    description: "Vibrant emeralds in a sleek bracelet design.",
    price: "$3,200",
    badges: ["NEW", "SALE"],
    image: "https://plus.unsplash.com/premium_photo-1681276168324-a6f1958aa191?w=500&auto=format&fit=crop&q=60"
  }
];

  // Filter products based on active tab
  const filteredProducts = products.filter(product => {
    if(activeTab === 'NEW ARRIVED') return product.badges.includes("NEW");
    if(activeTab === 'FEATURED') return product.badges.includes("FEATURED");
    if(activeTab === 'ON SALE') return product.badges.includes("SALE"); // assuming "SALE" badge
    return true;
  });

  return (
    <section className="w-full font-sans bg-white pt-24 pb-10">
      
      {/* Section Title */}
      <div className="text-center mb-10">
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
                  : 'text-gray-400 font-medium hover:text-[#111111]'}`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#111111]"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer flex flex-col h-full">
              
              {/* Image */}
              <div className="relative overflow-hidden bg-[#F9F9F9] aspect-[4/5] flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                
                {/* Badges */}
                <div className="absolute top-4 right-4 flex flex-col gap-1 z-10">
                  {product.badges.map((badge, idx) => (
                    <span key={idx} className="bg-[#111111] text-white text-[9px] font-semibold tracking-widest px-2 py-1 uppercase">
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="mt-6 flex flex-col flex-grow space-y-2">
                <p className="text-[10px] tracking-[0.2em] text-[#C19A5B] font-semibold uppercase">
                  {product.category}
                </p>
                <h3 className="text-xl font-medium text-gray-800 leading-tight group-hover:text-gray-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
                <p className="text-lg font-medium text-gray-700 pt-2 mt-auto">
                  {product.price}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ProductGrid;