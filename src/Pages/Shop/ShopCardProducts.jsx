import React, { useState, useEffect } from "react";
import { ShoppingBag, Eye, Star } from "lucide-react";

// Product data
const products = [
  {
    id: 1,
    category: "NECKLACES",
    title: "Color By The Yard Emerald Pendant",
    description: "Style this adjustable chain with other pendants of varying lengths for a look that's sure to turn heads.",
    price: "$1,700 — $1,800",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=500&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=500&auto=format&fit=crop",
    badge: "NEW",
    rating: 5,
  },
  {
    id: 2,
    category: "NECKLACES",
    title: "Olive Leaf Pendant",
    description: "Inspired by the olive branch, a symbol of peace and abundance. In 18k gold with a round brilliant diamond.",
    price: "$1,200",
    image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=500&auto=format&fit=crop&q=60",
    hoverImage: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=500&auto=format&fit=crop&q=60",
    badge: "OUT OF STOCK",
    badgeColor: "bg-red-500",
    rating: 4,
  },
  {
    id: 3,
    category: "NECKLACES",
    title: "T1 Circle Pendant",
    description: "Traced in scintillating diamonds, the beveled edge design of this circle pendant makes a powerful style statement.",
    price: "$2,000",
    image: "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=500&auto=format&fit=crop&q=60",
    hoverImage: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop&q=60",
    badge: "",
    rating: 5,
  },
  {
    id: 4,
    category: "NECKLACES",
    title: "X Closed Interlocking Pendant",
    description: "A delicate 18k yellow gold chain combined with two interlocking circles defines this modern pendant.",
    price: "$1,750",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=500&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5lY2tsYWNlfGVufDB8fDB8fHww",
    badge: "FEATURED",
    badgeColor: "bg-zinc-800",
    rating: 4,
  },
  {
    id: 5,
    category: "EARRINGS",
    title: "Diamond Solitaire Studs",
    description: "Classic round brilliant diamonds set in 14k white gold. Timeless elegance.",
    price: "$2,500",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&auto=format&fit=crop&q=60",
    hoverImage: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=500&auto=format&fit=crop&q=60",
    badge: "",
    rating: 5,
  },
  {
    id: 6,
    category: "BRACELETS",
    title: "Link Bracelet in Gold",
    description: "Distinctive links define this modern classic. Bold enough to wear alone.",
    price: "$1,100",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&auto=format&fit=crop&q=60",
    hoverImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&auto=format&fit=crop&q=60",
    badge: "NEW",
    rating: 4,
  },
  {
    id: 7,
    category: "RINGS",
    title: "Sapphire and Diamond Ring",
    description: "A deep blue sapphire surrounded by a halo of brilliant diamonds.",
    price: "$3,200",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop&q=60",
    hoverImage: "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=500&auto=format&fit=crop&q=60",
    badge: "SALE",
    badgeColor: "bg-blue-600",
    rating: 5,
  },
  {
    id: 8,
    category: "NECKLACES",
    title: "Rose Gold Heart Pendant",
    description: "A delicate heart pendant in 18k rose gold with pavé diamonds.",
    price: "$950",
    image: "https://media.istockphoto.com/id/2212704901/photo/premium-gemstone-necklace-styled-on-luxurious-green-cloth-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=LSjrSmxhzMhShqk14j2PGVtp_p85wEITHg6EUM8mdg0=",
    hoverImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop&q=60",
    badge: "",
    rating: 4,
  },
];

// Preload hover images for smooth transitions
products.forEach(product => {
  const img = new Image();
  img.src = product.hoverImage;
});

// Product Card
const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative bg-[#F3F3F3] aspect-[4/5] overflow-hidden rounded-sm">
        {product.badge && (
          <span
            className={`absolute top-3 right-0 z-20 text-white text-[10px] tracking-tighter font-bold px-3 py-1 shadow-md ${
              product.badgeColor || "bg-black"
            }`}
          >
            {product.badge}
          </span>
        )}

        <img
          src={isHovered ? product.hoverImage : product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
        />

        {/* Overlay Buttons */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-6 space-y-2 z-10">
          <button className="w-[85%] bg-white text-black py-3 text-sm font-medium tracking-widest flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 hover:bg-black hover:text-white border border-white">
            <ShoppingBag size={16} /> ADD TO CART
          </button>
          <button className="w-[85%] bg-white/80 backdrop-blur-sm text-black py-2 text-xs font-medium tracking-widest flex items-center justify-center gap-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 hover:bg-white border border-white/50">
            <Eye size={14} /> QUICK VIEW
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="pt-6 flex flex-col space-y-2">
        {/* Stars */}
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} fill={i < product.rating ? "#D4AF37" : "transparent"} color={i < product.rating ? "#D4AF37" : "#E5E7EB"} />
          ))}
        </div>

        <p className="text-[#999] text-[10px] tracking-[2.5px] uppercase font-semibold">{product.category}</p>

        <h3 className="text-[#222] text-[19px] font-light leading-snug group-hover:text-gray-500 transition-colors duration-300">{product.title}</h3>

        <p className="text-gray-400 text-[13px] leading-relaxed font-light line-clamp-2">{product.description}</p>

        <div className="pt-3">
          <span className="text-xl font-light text-[#111]">{product.price}</span>
        </div>
      </div>
    </div>
  );
};

// Main Grid Component
const ProductGrid = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? products : products.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 bg-white font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Show More / Show Less */}
      <div className="text-center mt-16">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-12 py-4 border border-black text-[11px] tracking-[3px] uppercase hover:bg-black hover:text-white transition-all duration-500 shadow-lg"
        >
          {showAll ? "Show Less" : "Explore All Products"}
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;