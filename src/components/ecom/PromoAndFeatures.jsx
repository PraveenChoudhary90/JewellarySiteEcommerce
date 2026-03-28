import React from 'react';
import img1 from "../../assets/ecom/collection/col1.jpeg";
import img2 from "../../assets/ecom/collection/col2.jpeg";
import img3 from "../../assets/ecom/collection/col3.jpeg";

const PromoAndFeatures = () => {
  const promos = [
    {
      id: 1,
      subtitle: "COLLECTION",
      title: "Gold & Silver",
      titleColor: "text-[#C19A5B]",
      subtitleColor: "text-[#C19A5B]/70",
      image: img1,
    },
    {
      id: 2,
      subtitle: "COLLECTION",
      title: "Queen's Set\n20% Off",
      titleColor: "text-[#111111]",
      subtitleColor: "text-[#C19A5B]/70",
      image: img2,
    },
    {
      id: 3,
      subtitle: "COLLECTION",
      title: "Grey Luxury\nParadise",
      titleColor: "text-[#111111]",
      subtitleColor: "text-[#C19A5B]/70",
      image: img3,
    }
  ];

  const features = [
    {
      name: "Free Delivery",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    },
    {
      name: "Money Back Guarantee",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="12" r="5"></circle>
          <path d="M12 15h6a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-3"></path>
          <path d="M16 8h2.5a2.5 2.5 0 0 1 2.5 2.5v1"></path>
        </svg>
      )
    },
    {
      name: "24/7 Support",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      )
    },
    {
      name: "High Quality",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="12" rx="2" ry="2"></rect>
          <circle cx="12" cy="10" r="2"></circle>
          <path d="M8 20l4-4 4 4"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="w-full font-sans">
      
      {/* --- PROMO BANNERS SECTION --- */}
      <div className="max-w-[1600px] mx-auto border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {promos.map((promo, index) => (
            <div 
              key={promo.id} 
              className={`relative h-[280px] bg-white flex items-center justify-between p-10 lg:p-14 group cursor-pointer overflow-hidden
                ${index !== promos.length - 1 ? 'md:border-r border-gray-200' : ''}
              `}
            >
              {/* Left Side: Text Content */}
              <div className="z-10 w-1/2 flex flex-col items-start">
                <span className={`text-[10px] tracking-[0.2em] uppercase mb-4 ${promo.subtitleColor} font-medium`}>
                  {promo.subtitle}
                </span>
                
                <h3 className={`text-[32px] leading-[1.2] font-light mb-8 whitespace-pre-line ${promo.titleColor}`}>
                  {promo.title}
                </h3>
                
                <div className="flex items-center gap-2 text-[11px] font-semibold tracking-widest text-[#111111] group-hover:text-[#C19A5B] transition-colors duration-300">
                  SHOP NOW 
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </div>
              </div>

              {/* Right Side: Image */}
              <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[65%] h-[120%] flex items-center justify-center">
                {/* Note: For perfect results, use images with transparent backgrounds (.png) 
                  mix-blend-multiply helps remove white backgrounds from jpegs slightly 
                */}
                <img 
                  src={promo.image} 
                  alt={promo.title.replace('\n', ' ')} 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- FEATURES BAR SECTION --- */}
      {/* bg-[#FAF8F5] creates that warm, expensive cream color from the design */}
      <div className="w-full bg-[#FAF8F5] border-b border-gray-200">
        <div className="max-w-[1600px] mx-auto py-8 px-6 md:px-12">
          <div className="flex md:flex-nowrap flex-wrap justify-between items-center">
            {features.map((feature) => (
              <div 
                key={feature.name} 
                className="w-full md:w-1/4 flex items-center justify-center md:justify-start lg:justify-center gap-4 text-gray-600 hover:text-[#C19A5B] transition-colors duration-300 cursor-pointer"
              >
                <div className="text-gray-500">
                  {feature.icon}
                </div>
                <span className="text-[13px] tracking-wide font-light">
                  {feature.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default PromoAndFeatures;