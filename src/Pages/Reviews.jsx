import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle } from 'lucide-react';

const jewelryReviews = [
  {
    id: 1,
    name: "Ananya Iyer",
    item: "Antique Gold Bridal Set",
    comment: "I bought this set for my wedding, and honestly, it’s even more breathtaking in person than in the photos. The weight feels substantial and the gold has such a rich, authentic glow.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 2,
    name: "Rohan Malhotra",
    item: "Infinity Diamond Ring",
    comment: "I gifted this to my wife for our anniversary, and the royal packaging alone won her heart. The clarity of the diamond is exceptional and the sparkle is unmatched.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 3,
    name: "Ishita Kapoor",
    item: "Rose Gold Studs",
    comment: "I wanted something minimalist yet elegant for the office. These studs are lightweight and comfortable, but they still carry that high-end luxury vibe. Quality is 10/10.",
    rating: 4,
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 4,
    name: "Dr. Sandeep Verma",
    item: "24K Gold Coin (999 Purity)",
    comment: "Trust is everything when buying gold. The certification provided was transparent, and the finishing was incredibly smooth. Perfect place for investment-grade gold.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  // {
  //   id: 5,
  //   name: "Mehak Jain",
  //   item: "Evil Eye Silver Bracelet",
  //   comment: "Absolutely love the design! The silver quality is top-notch and hasn't tarnished at all. The styles here are so unique and trendy compared to other brands.",
  //   rating: 5,
  //   img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
  // }
];

const JewelryReviewPage = () => {
  return (
    <div className="min-h-screen bg-[#fdf8f1] py-16 sm:py-20 px-4 sm:px-6 flex flex-col items-center font-sans w-full">

      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2a2a2a] mb-6 tracking-tight"
        >
          Customer Reviews
        </motion.h2>
        <div className="flex items-center justify-center gap-3">
          <div className="h-[1px] w-16 bg-amber-800/20"></div>
          <div className="h-3 w-3 rotate-45 border border-amber-600/50"></div>
          <div className="h-[1px] w-16 bg-amber-800/20"></div>
        </div>
      </div>

      {/* Reviews Grid (responsive for mobile/tablet/desktop) */}
      <div className="max-w-7xl w-full  px-2">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 min-w-[280px]">
    {jewelryReviews.map((review, index) => (
      <motion.div
        key={review.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        style={{ perspective: 1000 }}
      >
        <motion.div
          whileHover={{ 
            rotateY: 8, 
            rotateX: -5,
            y: -10,
            boxShadow: "0px 25px 50px rgba(180, 140, 60, 0.12)" 
          }}
          whileTap={{ scale: 0.98 }}
          className="bg-white border border-[#f3e5d8] p-6 sm:p-8 rounded-sm h-full flex flex-col justify-between transition-all duration-300 relative group min-w-[280px]"
        >
                {/* Gold Accent */}
                <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-amber-500 transition-all duration-500"></div>

                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="relative">
                      <img 
                        src={review.img} 
                        alt={review.name} 
                        className="h-16 w-16 rounded-full object-cover border-2 border-[#fdf8f1] shadow-md grayscale-[30%] group-hover:grayscale-0 transition-all"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-white rounded-full">
                        <CheckCircle size={18} className="text-green-600 fill-white" />
                      </div>
                    </div>
                    <Quote className="text-amber-100 h-10 w-10 group-hover:text-amber-200 transition-colors" />
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={i < review.rating ? "fill-amber-500 text-amber-500" : "text-gray-200"} 
                      />
                    ))}
                  </div>

                  <p className="text-[#555] text-base leading-relaxed italic mb-6">
                    "{review.comment}"
                  </p>
                </div>

                <div className="mt-auto">
                  <h4 className="text-[#b48c3c] font-semibold tracking-widest uppercase text-xs">
                    {review.name}
                  </h4>
                  <p className="text-gray-400 text-[10px] mt-1 uppercase tracking-wider">{review.item}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fully Responsive NetRootX Text for all devices */}
      <div className="mt-24 opacity-10 select-none overflow-hidden w-full text-center px-2 sm:px-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-serif text-black tracking-[0.5rem] sm:tracking-[1rem] md:tracking-[1.5rem] lg:tracking-[2.5rem] xl:tracking-[3rem] truncate">
          NetRootX
        </h1>
      </div>

    </div>
  );
};

export default JewelryReviewPage;