import React, { useState } from "react";

const categoriesData = [
  { name: "Bracelets", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=300" },
  { name: "Earrings", image: "https://images.unsplash.com/photo-1652766540048-de0a878a3266?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFycmluZ3xlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=300" },
  { name: "Other", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=300" },
  { name: "Rings", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=300" },
  { name: "Sets", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=300" },
];

const ShopNavigate = () => {
  const [activeCategory, setActiveCategory] = useState(""); // खाली initially

  return (
    <div className="w-full py-16 bg-white font-sans selection:bg-black selection:text-white">
      {/* Page Title */}
      <h1 className="text-center text-5xl font-extralight tracking-tight text-gray-800 mb-16">
        {activeCategory || "Shop"} {/* अगर activeCategory खाली है तो Shop दिखे */}
      </h1>

      {/* Categories Navigation */}
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 px-4">
        {categoriesData.map((item) => {
          const isActive = activeCategory === item.name;

          return (
            <div
              key={item.name}
              onClick={() => setActiveCategory(item.name)} // click पर category change
              className="flex flex-col items-center cursor-pointer group"
            >
              {/* Image Circle with Hover Effects */}
              <div
                className={`
                  relative w-24 h-24 md:w-32 md:h-32 rounded-full border transition-all duration-500 ease-in-out overflow-hidden
                  ${isActive 
                    ? "border-black scale-105 shadow-sm" 
                    : "border-gray-200 group-hover:border-gray-400 group-hover:scale-105"
                  }
                `}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className={`
                    w-full h-full object-cover transition-transform duration-700 ease-in-out
                    ${isActive ? "scale-110" : "group-hover:scale-110"}
                  `}
                />
              </div>

              {/* Text Label with Hover Effect */}
              <span
                className={`
                  mt-4 text-base tracking-widest uppercase transition-colors duration-300
                  ${isActive 
                    ? "text-black font-medium" 
                    : "text-gray-400 group-hover:text-black"
                  }
                `}
              >
                {item.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Subtle bottom divider */}
      <div className="max-w-6xl mx-auto mt-20 border-b border-gray-100"></div>
    </div>
  );
};

export default ShopNavigate;