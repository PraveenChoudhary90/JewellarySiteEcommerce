import React from 'react';

const NewsCard = ({ date, title, description, image }) => {
  return (
    <div className="group  relative p-1 rounded-2xl transition-all duration-500 hover:scale-105 hover:rotate-1">
      {/* 3D Gradient Background Layer */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      
      {/* Main Glassmorphic Card */}
      <div className="relative flex flex-col h-full bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 bg-amber-500/80 backdrop-blur-md text-black font-bold text-xs px-3 py-1 rounded-full uppercase tracking-widest">
            {date}
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
            {title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            {description}
          </p>
          
          <div className="mt-auto">
            <button className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium transition-all bg-white/5 rounded-lg group/btn hover:bg-white/10 border border-amber-500/30">
              <span className="relative text-amber-400 group-hover/btn:text-amber-200 transition-colors">Read More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const JewelryNewsPage = () => {
  const newsItems = [
    {
      date: "25 March 2026",
      title: "The Golden Era: 2026 Trends",
      description: "Discover how vintage gold designs are making a massive comeback in modern bridal collections.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600"
    },
    {
      date: "18 March 2026",
      title: "Diamond Care 101",
      description: "Expert tips on maintaining the sparkle of your precious stones for decades to come.",
      image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=600"
    },
    {
      date: "10 March 2026",
      title: "Ethical Sourcing",
      description: "How our latest collection supports sustainable mining and fair-trade craftsmanship.",
      image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmVja2xhY2V8ZW58MHx8MHx8fDA%3D"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-4 tracking-tight">
            LATEST FROM THE ATELIER
          </h2>
          <div className="h-1 w-32 bg-amber-500 mx-auto rounded-full shadow-[0_0_15px_rgba(245,158,11,0.6)]"></div>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Stay updated with the world of luxury, craftsmanship, and exclusive jewelry insights.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JewelryNewsPage;