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
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        </svg>
      )
    },
    {
      name: "Money Back Guarantee",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="8" cy="12" r="5"/>
          <path d="M12 15h6a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-3"/>
        </svg>
      )
    },
    {
      name: "24/7 Support",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M21 11.5a8.5 8.5 0 1 1-3.5-7"/>
        </svg>
      )
    },
    {
      name: "High Quality",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <rect x="3" y="4" width="18" height="12" rx="2"/>
          <circle cx="12" cy="10" r="2"/>
        </svg>
      )
    }
  ];

  return (
    <div className="w-full font-sans">

      {/* PROMO SECTION */}
      <div className="max-w-[1600px] mx-auto border-b border-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

          {promos.map((promo, index) => (
            <div
              key={promo.id}
              className={`relative h-[240px] sm:h-[280px] lg:h-[320px] bg-white overflow-hidden group cursor-pointer
              ${index !== promos.length - 1 ? 'lg:border-r border-gray-200' : ''}`}
              style={{ perspective: "1200px" }}
            >

              {/* 3D INNER CARD */}
              <div className="w-full h-full p-6 sm:p-10 lg:p-12 flex items-center justify-between transform-gpu transition duration-500 ease-out
                group-hover:scale-[1.03] group-hover:-rotate-x-2 group-hover:rotate-y-6">

                {/* TEXT */}
                <div className="z-10 w-1/2">
                  <span className={`text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-3 block ${promo.subtitleColor}`}>
                    {promo.subtitle}
                  </span>

                  <h3 className={`text-[22px] sm:text-[26px] lg:text-[30px] leading-tight font-light mb-6 whitespace-pre-line ${promo.titleColor}`}>
                    {promo.title}
                  </h3>

                  <div className="flex items-center gap-2 text-[11px] font-semibold tracking-widest text-[#111] group-hover:text-[#C19A5B] transition">
                    SHOP NOW
                    <span className="group-hover:translate-x-1 transition">→</span>
                  </div>
                </div>

                {/* IMAGE */}
                <div className="absolute right-[-15%] top-1/2 -translate-y-1/2 w-[70%] h-[120%]">
                  <img
                    src={promo.image}
                    alt=""
                    className="w-full h-full object-contain mix-blend-multiply
                    transition duration-700 ease-out
                    group-hover:scale-110 group-hover:-translate-y-3"
                  />
                </div>

                {/* GLOW EFFECT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/40 to-transparent"></div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="w-full bg-[#FAF8F5] border-b border-gray-200">
        <div className="max-w-[1600px] mx-auto py-6 sm:py-8 px-4 sm:px-10">
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex items-center justify-center md:justify-start gap-3 text-gray-600 hover:text-[#C19A5B] transition duration-300"
              >
                <div className="text-gray-500">
                  {feature.icon}
                </div>

                <span className="text-[12px] sm:text-[13px] font-light tracking-wide">
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