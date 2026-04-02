import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ProductGrid = () => {
  const [activeTab, setActiveTab] = useState('NEW ARRIVED');
  const [showAll, setShowAll] = useState(false);

  const tabs = ['NEW ARRIVED', 'FEATURED', 'ON SALE'];

  const products = [
    {
      id: 1,
      title: "Fleur De Lis Key Brooch",
      category: "BROOCHES · OTHER",
      description: "Brilliant beacons of optimism and hope, Tiffany Keys are radiant symbols of a bright future.",
      price: "$750",
      badges: ["NEW", "FEATURED"],
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600",
      hoverImage: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 2,
      title: "Starfish Brooch",
      category: "BROOCHES · OTHER",
      description: "The starfish evokes life beneath the waves and in the celestial heavens.",
      price: "$850",
      badges: ["NEW", "SALE"],
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600",
      hoverImage: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 3,
      title: "Layer Cake Necklace Set",
      category: "SETS",
      description: "Fine jewelry deserves fair prices.",
      price: "$1,400",
      badges: ["NEW", "FEATURED"],
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600",
      hoverImage: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 4,
      title: "The Texture Ring Set",
      category: "SETS",
      description: "Perfect modern ring pair.",
      price: "$2,500",
      badges: ["NEW"],
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&q=80&w=600",
      hoverImage: "https://images.unsplash.com/photo-1569397288884-4d43d6738fbd?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 5,
      title: "Emerald Pendant",
      category: "NECKLACES",
      description: "Stylish layered pendant.",
      price: "$1,700",
      badges: ["NEW", "SALE"],
      image: "https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5lY2tsYWNlfGVufDB8fDB8fHww",
      hoverImage: "https://plus.unsplash.com/premium_photo-1709033404514-c3953af680b4?blur=10"
    },
    {
      id: 6,
      title: "Heart Locket",
      category: "LOCKET",
      description: "A cherished keepsake.",
      price: "$550",
      badges: ["NEW", "FEATURED"],
      image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmVja2xhY2V8ZW58MHx8MHx8fDA%3D",
      hoverImage: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?blur=10"
    },
    {
      id: 7,
      title: "Diamond Ring",
      category: "RINGS",
      description: "Elegant diamond ring.",
      price: "$2,200",
      badges: ["NEW", "SALE"],
      image: "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmluZ3xlbnwwfHwwfHx8MA%3D%3D",
      hoverImage: "https://plus.unsplash.com/premium_photo-1670537037688-94a5428256b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 8,
      title: "Pearl Earrings",
      category: "EARRINGS",
      description: "Perfect for occasions.",
      price: "$1,000",
      badges: ["NEW"],
      image: "https://plus.unsplash.com/premium_photo-1675107359685-f268487a3a46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWFycmluZ3N8ZW58MHx8MHx8fDA%3D",
      hoverImage: "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?blur=10"
    }
  ];

  // Preload hover images for all products
  useEffect(() => {
    products.forEach(product => {
      const img = new Image();
      img.src = product.hoverImage;
    });
  }, []);

  // Filter products based on active tab
  const filteredProducts = products.filter(product => {
    if (activeTab === 'NEW ARRIVED') return product.badges.includes("NEW");
    if (activeTab === 'FEATURED') return product.badges.includes("FEATURED");
    if (activeTab === 'ON SALE') return product.badges.includes("SALE");
    return true;
  });

  const visibleProducts = showAll ? filteredProducts : filteredProducts.slice(0, 4);

  return (
    <section className="w-full font-sans bg-[#fcfcfc] pt-24 pb-16 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-[42px] font-light text-[#111] tracking-tight">
          Luxury Collection
        </motion.h2>
        <div className="w-20 h-[1px] bg-[#C19A5B] mx-auto mt-4"></div>
      </div>

      {/* Tabs */}
      <div className="w-full border-y bg-white flex justify-center sticky top-0 z-10">
        <div className="flex gap-12 pt-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setShowAll(false); }}
              className={`pb-3 text-[11px] tracking-[3px] uppercase transition-all duration-500 relative ${activeTab === tab ? 'text-black font-bold' : 'text-gray-400'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {visibleProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        {/* Show More / Show Less */}
        <div className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(!showAll)}
            className="px-12 py-4 border border-black text-[11px] tracking-[3px] uppercase hover:bg-black hover:text-white transition-all duration-500 shadow-lg"
          >
            {showAll ? "Show Less" : "Explore All Products"}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

// Product Card Component
const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      layout
      whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
      className="group flex flex-col bg-white p-2 shadow-sm hover:shadow-2xl transition-shadow duration-500 perspective-1000"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-gray-100">
        <motion.img
          key={hovered ? product.hoverImage : product.image} // important to force update
          src={hovered ? product.hoverImage : product.image}
          alt={product.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: hovered ? 1.05 : 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.badges.map((badge, index) => (
            <span
              key={index}
              className={`text-[9px] px-2 py-1 uppercase font-bold rounded-sm ${
                badge === "NEW"
                  ? "bg-[#C19A5B] text-white"
                  : badge === "FEATURED"
                  ? "bg-blue-500 text-white"
                  : badge === "SALE"
                  ? "bg-red-500 text-white"
                  : "bg-gray-500 text-white"
              }`}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="mt-6 space-y-2 flex flex-col flex-grow px-2">
        <p className="text-[10px] text-[#C19A5B] uppercase tracking-[2px] font-semibold">{product.category}</p>
        <h3 className="text-md font-normal text-[#222]">{product.title}</h3>
        <p className="text-xs text-gray-400 line-clamp-2">{product.description}</p>
        <p className="mt-auto pt-2 text-lg font-light">{product.price}</p>
      </div>
    </motion.div>
  );
};

export default ProductGrid;