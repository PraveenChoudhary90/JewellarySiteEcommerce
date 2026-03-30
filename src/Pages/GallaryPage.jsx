import React from "react";

const JewelryGallery = () => {
  const categories = [
    { id: 1, name: "Bracelets", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800" },
    { id: 2, name: "Rings", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800" },
    { id: 3, name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800" },
    { id: 4, name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800" },
    { id: 5, name: "Sets", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=800" },
    { id: 6, name: "Other", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800" },
  ];

  return (
    <div className="w-full min-h-screen bg-[#fcfaf7] py-12 px-4 md:px-10">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-sm uppercase tracking-[0.4em] text-yellow-700 font-semibold mb-2 italic">Luxury Selection</h2>
        <div className="h-[1px] w-24 bg-yellow-600 mx-auto"></div>
      </div>

      {/* 3D FLEX GRID */}
      <div className="flex flex-col md:flex-row h-[700px] w-full gap-2 overflow-hidden rounded-2xl shadow-2xl bg-white border-8 border-white">
        
        {categories.map((item) => (
          <div
            key={item.id}
            className="group relative flex-1 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:flex-[3] cursor-pointer overflow-hidden border-r border-white/20 last:border-none"
          >
            {/* Background Image with 3D Zoom */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${item.image})` }}
            />

            {/* Premium Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

            {/* Glassmorphism Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <div className="relative overflow-hidden">
                 {/* Text with 3D lift effect */}
                <h3 className="text-white text-xl md:text-2xl font-light tracking-[0.2em] uppercase transition-all duration-500 group-hover:scale-125 group-hover:-translate-y-4 drop-shadow-lg">
                  {item.name}
                </h3>
                
                {/* Underline Animation */}
                <div className="w-0 h-[1px] bg-white mx-auto transition-all duration-500 group-hover:w-full"></div>
              </div>

              {/* "Shop Now" Button - Hidden until Hover */}
              <div className="mt-8 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
                <button className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/30 text-white text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors rounded-full">
                  Explore
                </button>
              </div>
            </div>

            {/* Side-lighting effect for 3D feel */}
            <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
          </div>
        ))}

      </div>

      {/* Mobile Footer Tip */}
      <div className="mt-8 text-center md:hidden">
        <p className="text-gray-400 text-xs italic">Tap on a category to expand</p>
      </div>
    </div>
  );
};

export default JewelryGallery;