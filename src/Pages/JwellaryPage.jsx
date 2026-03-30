import React from "react";

const JewelrySection = ({ item, isReverse }) => {
  return (
    <div className="w-full py-20 px-6 md:px-20 bg-[#fcfaf7]">
      <div className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center ${isReverse ? 'md:flex-row-reverse' : ''}`}>
        
        {/* IMAGE SECTION - 3D HOVER EFFECT */}
        <div className={`relative group ${isReverse ? 'md:order-last' : 'md:order-first'}`}>
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 group-hover:shadow-[0_45px_80px_-20px_rgba(0,0,0,0.3)] group-hover:-translate-y-2">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Glassmorphism Badge */}
            <div className="absolute bottom-6 left-6 backdrop-blur-md bg-white/20 border border-white/30 px-6 py-2 rounded-full">
               <span className="text-white text-[10px] tracking-[0.3em] uppercase font-bold">Handcrafted</span>
            </div>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className={`flex flex-col space-y-6 ${isReverse ? 'md:pr-12' : 'md:pl-12'}`}>
          <span className="text-yellow-700 text-xs font-bold tracking-[0.5em] uppercase">
            Exclusive Selection
          </span>
          
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight">
            {item.title} <br />
            <span className="italic font-light text-gray-500">{item.subtitle}</span>
          </h2>

          <div className="w-20 h-[2px] bg-yellow-600"></div>

          <p className="text-gray-500 text-lg leading-relaxed font-light max-w-md">
            {item.description}
          </p>

          {/* Premium Read More Button */}
          <button className="group relative w-fit mt-4 px-10 py-4 bg-gray-900 text-white rounded-full overflow-hidden transition-all duration-300 hover:bg-yellow-700 hover:shadow-2xl hover:shadow-yellow-700/30">
            <span className="relative z-10 text-xs tracking-[0.2em] uppercase font-medium flex items-center gap-3">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};

const JewelryPage = () => {
  const contentData = [
    {
      title: "Golden Aura",
      subtitle: "Necklace Collection",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800",
      description: "Experience the ultimate fusion of luxury and art. Our necklaces are crafted with 24k gold and rare gems to make every moment shine."
    },
    {
      title: "Diamond Spark",
      subtitle: "Engagement Rings",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800",
      description: "Celebrate your love with a ring that speaks a thousand words. Precision cut diamonds set in elegant platinum bands."
    }
  ];

  return (
    <div className="bg-[#fcfaf7]">
      {contentData.map((item, index) => (
        <JewelrySection 
          key={index} 
          item={item} 
          isReverse={index % 2 !== 0} // Second item image will be on the right
        />
      ))}
    </div>
  );
};

export default JewelryPage;