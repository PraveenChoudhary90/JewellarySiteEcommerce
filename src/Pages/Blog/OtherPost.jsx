import React, { useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Bookmark, Clock3 } from "lucide-react";

const journalPosts = [
  {
    id: 1,
    date: "March 18, 2024",
    title: "Celestial Stones: The Meaning Behind Moonstone & Labradorite",
    excerpt: "Journey into the mythical world of iridescence and discover how these glowing gems connect us to the cosmos.",
    image: "https://images.unsplash.com/photo-1521694139475-da661702d635?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5lY2tsYWNlfGVufDB8fDB8fHww",
    category: "GEMOLOGY",
    readTime: "6 min read",
    rotate: "-2deg" // Default card tilt
  },
  {
    id: 2,
    date: "March 12, 2024",
    title: "Mastering the Mix: Gold, Silver, and Rose in One Look",
    excerpt: "Break the rules elegantly. Learn the curated approach to mixing metals for a modern, textured aesthetic.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
    category: "STYLING",
    readTime: "4 min read",
    rotate: "1deg"
  },
  {
    id: 3,
    date: "March 01, 2024",
    title: "From Sketch to Stone: The Making of the 'Aura' Collection",
    excerpt: "Go behind the scenes in our studio and see how abstract concepts transform into handcrafted masterpieces.",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop",
    category: "DESIGN STORY",
    readTime: "9 min read",
    rotate: "-1deg"
  },
  {
    id: 4,
    date: "February 22, 2024",
    title: "The Solitaire Reimagined: Five Modern Settings",
    excerpt: "Explore settings that offer unique, structural takes on the classic single-stone ring.",
    image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?q=80&w=800&auto=format&fit=crop",
    category: "WEDDING",
    readTime: "5 min read",
    rotate: "2deg"
  }
];

// --- 3D TILT CARD COMPONENT ---
const ThreeDTiltCard = ({ post }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Mouse position ko rotate perspective mein badalna
  const rotateX = useTransform(y, [-300, 300], [15, -15]); // Adjust depth here
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    x.set(mouseX - centerX);
    y.set(mouseY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{
        perspective: 1200, // Creates 3D depth
      }}
      className="h-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          // Pehle hum simple hover:scale use karte the, ab animation state.
          defaultRotate: post.rotate, // Initial aesthetic rotate
        }}
        animate={{ rotate: post.rotate, scale: 1 }}
        whileHover={{ scale: 1.04, transition: { duration: 0.3, ease: "easeOut" } }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }} // Ultra smooth
        className="relative group bg-white border border-gray-100 p-6 flex flex-col h-full shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-shadow duration-500 overflow-hidden"
      >
        {/* Glossy Glare Overlay */}
        <motion.div
          className="absolute -inset-2 w-[150%] h-[150%] pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-700"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)",
            translateX: x,
            translateY: y,
          }}
        />

        {/* --- Image Section --- */}
        <div className="relative aspect-[4/3] overflow-hidden mb-6">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Post Category Badge */}
          <div className="absolute top-3 left-0 bg-zinc-900 text-white px-4 py-1.5 z-10">
            <p className="text-[10px] tracking-[3px] font-bold uppercase">{post.category}</p>
          </div>
        </div>

        {/* --- Text Content --- */}
        <div className="flex-grow flex flex-col space-y-4">
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <p className="font-semibold tracking-wide">{post.date}</p>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <div className="flex items-center gap-1.5">
              <Clock3 size={13} />
              {post.readTime}
            </div>
          </div>

          <h4 className="text-2xl font-light text-zinc-900 leading-snug group-hover:text-amber-700 transition-colors">
            {post.title}
          </h4>

          <p className="text-gray-500 text-sm leading-relaxed font-light line-clamp-2">
            {post.excerpt}
          </p>
        </div>

        {/* --- Bottom Action --- */}
        <div className="pt-6 mt-auto border-t border-gray-100 flex items-center justify-between">
          <button className="text-[12px] font-bold tracking-[2.5px] text-zinc-900 flex items-center gap-2 group-hover:gap-4 transition-all">
            READ THE ARTICLE <ArrowRight size={15} />
          </button>
          <motion.button whileHover={{ scale: 1.1 }} className="text-gray-400 hover:text-zinc-900">
            <Bookmark size={18} />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- MAIN JOURNAL COMPONENT ---
const InteractiveJournal = () => {
  return (
    <section className="bg-zinc-50 py-24 px-6 font-sans relative overflow-hidden">
      {/* Background Floating Elements - Animated */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-gray-100 rounded-full shadow-inner"
            style={{
              width: `${(i + 1) * 70}px`,
              height: `${(i + 1) * 70}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
              borderColor: i % 2 === 0 ? "#E5E7EB" : "#D4AF37",
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Section Header - Animated --- */}
        <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="text-center mb-16 flex flex-col items-center"
>
  <h2 className="text-[11px] tracking-[5px] text-gray-500 font-bold uppercase mb-3">
    The Journal
  </h2>
  <div className="w-16 h-px bg-amber-600 mb-5" />
  <h3 className="text-5xl font-extralight text-zinc-950 tracking-tight leading-tight max-w-xl">
    FROM OUR STUDIO TO YOUR SCREEN
  </h3>
  <p className="mt-6 text-gray-500 max-w-lg font-light text-base leading-relaxed">
    Curated insights on gemology, styling guides, and the intricate art of handcrafted design.
  </p>
</motion.div>

        {/* --- Animated Blog Grid (4 Columns) --- */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
        >
          {journalPosts.map((post) => (
            <AnimatePresence key={post.id}>
              {/* Fade in initial load animation for cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: post.id * 0.1 }}
                className="h-full"
              >
                {/* 3D animated card component render */}
                <ThreeDTiltCard post={post} />
              </motion.div>
            </AnimatePresence>
          ))}
        </motion.div>

        {/* --- Discover All Button --- */}
        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-zinc-950 text-white px-10 py-4 text-[13px] font-bold tracking-[3px] flex items-center gap-3 mx-auto shadow-xl hover:bg-zinc-800 transition-colors"
          >
            DISCOVER ALL ARTICLES
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default InteractiveJournal;