import React, { useState } from "react";

const categoriesData = [
  { name: "Bracelets", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600" },
  { name: "Earrings", image: "https://images.unsplash.com/photo-1652766540048-de0a878a3266?w=600&auto=format&fit=crop&q=60" },
  { name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600" },
  { name: "Rings", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600" },
  { name: "Sets", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600" },
  { name: "Other", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=600" },
];

const ShopNavigate = () => {
  const [activeCategory, setActiveCategory] = useState("");

  return (
    <div className="w-full py-12 md:py-24 bg-[#FAFAFA] font-sans selection:bg-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Luxury Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 mb-4 block animate-fade-in">Discover</p>
          <h2 className="text-4xl md:text-6xl font-extralight tracking-tight text-neutral-900 italic">
            {activeCategory || "The Boutique"}
          </h2>
        </div>

        {/* Categories Container */}
        {/* Mobile: Vertical (flex-col) | Tablet/Desktop: Horizontal (md:flex-row) */}
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center items-center gap-16 md:gap-8 lg:gap-12">
          {categoriesData.map((item) => {
            const isActive = activeCategory === item.name;

            return (
              <div
                key={item.name}
                onClick={() => setActiveCategory(item.name)}
                className="flex flex-col items-center cursor-pointer group w-full md:w-auto"
              >
                {/* Image Wrap */}
                <div className="relative">
                  <div
                    className={`
                      /* Mobile: Large Vertical Circles (400px devices) */
                      w-[240px] h-[240px] 
                      /* Tablet: Medium */
                      sm:w-[200px] sm:h-[200px]
                      /* Desktop: Compact Row */
                      md:w-[110px] md:h-[110px]
                      lg:w-[140px] lg:h-[140px]
                      
                      rounded-full transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] p-[1px]
                      ${isActive 
                        ? "ring-[1px] ring-neutral-800 ring-offset-[8px] scale-105" 
                        : "ring-[1px] ring-transparent hover:ring-neutral-200 ring-offset-4"
                      }
                    `}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <img
                        src={item.image}
                        alt={item.name}
                        className={`
                          w-full h-full object-cover transition-transform duration-[2s]
                          ${isActive ? "scale-110 grayscale-0" : "grayscale-[15%] group-hover:scale-110 group-hover:grayscale-0"}
                        `}
                      />
                    </div>
                  </div>

                  {/* Elegant Active Indicator */}
                  <div className={`
                    absolute -bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700
                    ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
                  `}>
                    <div className="w-[1px] h-4 bg-neutral-900" />
                  </div>
                </div>

                {/* Text Label */}
                <span
                  className={`
                    mt-12 md:mt-10 text-[11px] tracking-[0.35em] uppercase transition-all duration-500
                    ${isActive ? "text-neutral-900 font-semibold" : "text-neutral-400 group-hover:text-neutral-900"}
                  `}
                >
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Minimalist Divider */}
        <div className="mt-24 md:mt-32 flex justify-center">
            <div className="w-1 h-1 bg-neutral-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ShopNavigate;