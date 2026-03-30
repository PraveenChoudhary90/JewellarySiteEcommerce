

import React from "react";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    date: "MARCH 15, 2024",
    title: "The Art of Layering: How to Stack Your Necklaces",
    excerpt: "Discover the secret to creating a perfectly balanced necklace stack that expresses your unique style...",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
    category: "STYLING GUIDE"
  },
  {
    id: 2,
    date: "MARCH 10, 2024",
    title: "Sustainable Luxury: Our Commitment to Ethical Gold",
    excerpt: "Learn about our journey towards 100% recycled gold and how we ensure every diamond is conflict-free...",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop",
    category: "INSIDE THE STUDIO"
  },
  {
    id: 3,
    date: "MARCH 05, 2024",
    title: "Engagement Ring Trends to Watch in 2024",
    excerpt: "From vintage-inspired halos to modern minimalist bands, explore the shapes that are capturing hearts this season...",
    image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?q=80&w=800&auto=format&fit=crop",
    category: "TRENDS"
  }
];

const JewelryBlog = () => {
  return (
    <section className="bg-[#FAF9F6] py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Section Header --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-8">
          <div>
            <h2 className="text-[10px] tracking-[4px] text-gray-500 font-bold uppercase mb-2">The Journal</h2>
            <h3 className="text-4xl font-light text-zinc-900 tracking-tight">LATEST FROM THE SHOP</h3>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm font-semibold tracking-widest hover:text-gray-500 transition-colors mt-4 md:mt-0">
            VIEW ALL ARTICLES <ArrowRight size={16} />
          </button>
        </div>

        {/* --- Blog Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              
              {/* Blog Image */}
              <div className="relative overflow-hidden aspect-[16/10] mb-6">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1">
                  <p className="text-[9px] tracking-widest font-bold text-black">{post.category}</p>
                </div>
              </div>

              {/* Blog Content */}
              <div className="space-y-3">
                <p className="text-[11px] text-gray-400 tracking-wider font-medium">{post.date}</p>
                <h4 className="text-2xl font-light text-zinc-800 leading-tight group-hover:underline underline-offset-4 decoration-1 transition-all">
                  {post.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 font-light">
                  {post.excerpt}
                </p>
                
                <button className="pt-2 text-[12px] font-bold tracking-[2px] flex items-center gap-2 group-hover:gap-4 transition-all">
                  READ MORE <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden mt-12 text-center">
            <button className="text-sm font-bold tracking-widest border-b-2 border-black pb-1">
                VIEW ALL ARTICLES
            </button>
        </div>

      </div>
    </section>
  );
};

export default JewelryBlog;