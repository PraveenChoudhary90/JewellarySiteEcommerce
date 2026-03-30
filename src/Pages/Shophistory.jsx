import React from "react";

const ShopHistory = () => {
  const sectionData = [
    {
      id: 1,
      title: "Shop History",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800",
      isReverse: false,
      description: [
        "Village did removed enjoyed explain nor ham saw calling talking. Securing as informed declared or margaret. Joy horrible moreover man feelings own shy. Request norland neither mistake for yet.",
        "On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect.",
        "Improve ashamed married expense bed her comfort pursuit mrs."
      ]
    }
  ];

  return (
    <div className="w-full bg-[#fdfdfd] py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {sectionData.map((item) => (
          <div 
            key={item.id} 
            className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24"
          >
            {/* IMAGE */}
            <div className="w-full md:w-[42%] flex justify-center perspective-1500">
              <div className="relative overflow-hidden rounded-sm shadow-lg transition-all duration-500 ease-out transform group hover:shadow-2xl hover:-translate-y-2 hover:rotate-[3deg]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full max-w-[300px] md:max-w-full aspect-[3/4] object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="w-full md:w-[50%] flex flex-col items-center text-center">
              <h2 className="text-[40px] md:text-[50px] font-serif text-[#111] font-light tracking-tight mb-4">
                {item.title}
              </h2>

              {/* Divider */}
              <div className="flex items-center gap-4 mb-10">
                <div className="h-[1px] w-14 bg-[#c4a484]"></div>
                <div className="w-2.5 h-2.5 rounded-full border border-[#c4a484] flex items-center justify-center">
                  <div className="w-[2px] h-[2px] bg-[#c4a484] rounded-full"></div>
                </div>
                <div className="h-[1px] w-14 bg-[#c4a484]"></div>
              </div>

              {/* Text */}
              <div className="max-w-md space-y-6 text-[#666] text-[15px] leading-[1.9] font-light">
                {item.description.map((text, idx) => (
                  <p key={idx} className={idx === item.description.length - 1 ? "italic text-[#888]" : ""}>
                    {text}
                  </p>
                ))}
              </div>

              <button className="mt-14 px-14 py-4 border border-[#c4a484] text-[#c4a484] text-[12px] tracking-[0.4em] uppercase transition-all duration-500 hover:bg-[#c4a484] hover:text-white hover:tracking-[0.5em] font-medium">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopHistory;