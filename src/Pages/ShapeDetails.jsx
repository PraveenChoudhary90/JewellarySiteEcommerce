import React from "react";

const ShapeDetailPage = ({ shape }) => {
  // Fallback data if shape is not provided
  const data = shape || {
    name: "Golden Radiant Ring",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
    description: "A ring is more than just a piece of jewellery—it’s a symbol of love, commitment, and personal style. Whether worn as a statement accessory or a meaningful token, rings have been cherished for centuries for their beauty and emotional value."
  };

  return (
    <div className="w-full min-h-screen bg-[#faf9f6] flex items-center justify-center px-6 py-12 font-sans">
      
      {/* MAIN CONTAINER WITH 3D SHADOW */}
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12),0_30px_60px_-30px_rgba(0,0,0,0.15)] overflow-hidden grid md:grid-cols-2 items-center border border-white/50">
        
        {/* LEFT SECTION: IMAGE WITH FLOATING ANIMATION */}
        <div className="relative h-full flex items-center justify-center bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] p-12 overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute w-64 h-64 bg-yellow-200/30 rounded-full blur-3xl animate-pulse"></div>
          
          <img
            src={data.image}
            alt={data.name}
            className="relative z-10 w-full max-h-[450px] object-contain drop-shadow-[20px_35px_25px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-700 ease-out"
            style={{ 
                animation: 'float 6s ease-in-out infinite',
                filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))'
            }}
          />
        </div>

        {/* RIGHT SECTION: CONTENT */}
        <div className="p-10 md:p-16 lg:p-20">
          <span className="text-xs uppercase tracking-[0.3em] text-yellow-700 font-bold mb-4 block">
            Exclusive Collection
          </span>
          
          <h1 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight mb-6">
            {data.name}
          </h1>

          <div className="w-20 h-[3px] bg-gradient-to-r from-yellow-600 to-yellow-200 mb-8 rounded-full"></div>

          <p className="text-gray-500 text-lg leading-relaxed mb-10 font-light italic">
            "{data.description}"
          </p>

          <button className="px-10 py-4 bg-gray-900 text-white rounded-full hover:bg-yellow-700 transition-all duration-300 shadow-xl hover:shadow-yellow-700/20 active:scale-95 text-sm tracking-widest uppercase font-medium">
            Explore Collection
          </button>
        </div>

      </div>

      {/* Adding custom CSS for the floating effect */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}</style>
    </div>
  );
};

export default ShapeDetailPage;