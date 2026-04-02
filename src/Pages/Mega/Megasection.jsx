import React from "react";

const MegaSection = () => {
  return (
    <div className="w-full bg-[#fdfdfd] overflow-hidden selection:bg-neutral-200">
      
      {/* 1. Hero Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[90vh] border-b border-neutral-100">
        
        {/* Left Side: Editorial Text */}
        <div className="lg:col-span-5 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 bg-white">
          <span className="text-[10px] uppercase tracking-[0.6em] text-neutral-400 mb-6 block animate-pulse">
            Established 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-extralight tracking-tighter text-neutral-900 leading-[1.1] mb-8">
            Timeless <br /> 
            <span className="italic font-serif serif pl-4">Craftsmanship.</span>
          </h1>
          <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-md mb-10 font-light">
            Elevate your everyday with our signature collections. Hand-carved pieces designed to tell a story that lasts generations.
          </p>
          <div className="flex items-center gap-8">
            <button className="px-8 py-4 bg-neutral-900 text-white text-[10px] uppercase tracking-widest hover:bg-neutral-800 transition-all duration-500">
              Explore Now
            </button>
            <button className="text-[10px] uppercase tracking-widest border-b border-neutral-900 pb-1 hover:text-neutral-500 hover:border-neutral-300 transition-all">
              Our Story
            </button>
          </div>
        </div>

        {/* Right Side: Immersive Image */}
        <div className="lg:col-span-7 relative h-[60vh] lg:h-auto overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2000&auto=format&fit=crop" 
            alt="Luxury Jewelry" 
            className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[3s] ease-out"
          />
          {/* Subtle floating badge */}
          <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-md p-6 hidden md:block">
            <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 mb-1">Featured Piece</p>
            <p className="text-xs tracking-widest text-neutral-800 font-medium italic underline underline-offset-4 cursor-pointer">
              The Aurora Diamond Set →
            </p>
          </div>
        </div>
      </div>

      {/* 2. Philosophy / Highlight Section */}
      <div className="max-w-7xl mx-auto py-20 px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 mb-6 flex items-center justify-center border border-neutral-200 rounded-full">
               <span className="text-xs font-serif italic text-neutral-800">01</span>
            </div>
            <h3 className="text-xs uppercase tracking-[0.3em] font-semibold mb-4">Ethical Gold</h3>
            <p className="text-neutral-400 text-xs leading-loose tracking-wide">
              100% certified recycled gold and ethically sourced conflict-free diamonds.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 mb-6 flex items-center justify-center border border-neutral-200 rounded-full">
               <span className="text-xs font-serif italic text-neutral-800">02</span>
            </div>
            <h3 className="text-xs uppercase tracking-[0.3em] font-semibold mb-4">Bespoke Design</h3>
            <p className="text-neutral-400 text-xs leading-loose tracking-wide">
              Every curve is intentional. Our master artisans spend months on a single sketch.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 mb-6 flex items-center justify-center border border-neutral-200 rounded-full">
               <span className="text-xs font-serif italic text-neutral-800">03</span>
            </div>
            <h3 className="text-xs uppercase tracking-[0.3em] font-semibold mb-4">Lifetime Promise</h3>
            <p className="text-neutral-400 text-xs leading-loose tracking-wide">
              We offer complimentary cleaning and restoration for every piece, forever.
            </p>
          </div>

        </div>
      </div>

      {/* 3. Subtle Wide Image Section */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2000&auto=format&fit=crop" 
          alt="Jewelry Workshop"
          className="w-full h-full object-cover grayscale opacity-80"
        />
        <div className="absolute inset-0 bg-neutral-900/10 flex items-center justify-center">
             <div className="text-center px-4">
                <p className="text-white text-2xl md:text-4xl font-extralight tracking-[0.2em] italic uppercase">
                  Excellence in every detail.
                </p>
             </div>
        </div>
      </div>

    </div>
  );
};

export default MegaSection;