import React from "react";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const aboutSections = [
  {
    id: 1,
    title: "Our Heritage",
    content: "Founded in 1992, our journey began with a single spark of inspiration. Every piece of jewelry tells a story of love, heritage, and timeless elegance.",
    image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Master Craftsmanship",
    content: "Each design is meticulously handcrafted by master artisans who have spent decades perfecting their trade. We blend traditional techniques with modern technology.",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Sourcing Perfection",
    content: "We travel the globe to source the finest conflict-free diamonds and rare gemstones, ensuring that every stone meets our rigorous standards of brilliance and ethical purity.",
    image: "https://plus.unsplash.com/premium_photo-1674255466849-b23fc5f5d3eb?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "The Design Studio",
    content: "Our design studio is where magic happens. From hand-sketches to 3D rendering, we push the boundaries of jewelry aesthetics to create future heirlooms.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Bespoke Experience",
    content: "We offer a personalized journey for our clients. Whether it's an engagement ring or a custom necklace, we work closely to bring your vision to life.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Sustainability",
    content: "Our commitment to the planet is as strong as our commitment to beauty. We use 100% recycled gold and implement eco-friendly practices across our production chain.",
    image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?q=80&w=800&auto=format&fit=crop",
  }
];

const AboutUs = () => {
  return (
    <div className="bg-white font-sans overflow-hidden">

      {/* --- Hero Header --- */}
      <section className="py-24 text-center bg-[#FAF9F6]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-6"
        >
          <h1 className="text-[12px] tracking-[6px] text-amber-600 font-bold uppercase mb-4">Discover Our Story</h1>
          <h2 className="text-5xl md:text-6xl font-extralight text-zinc-900 tracking-tight leading-tight">
            Crafting Elegance Since 1992
          </h2>
        </motion.div>
      </section>

      {/* --- Alternating Sections --- */}
      <section className="py-10">
        {aboutSections.map((section, index) => (
          <div key={section.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center min-h-[350px] relative`}>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 h-[400px] relative overflow-hidden rounded-lg"
            >
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-center"
            >
              {/* Removed the 0{section.id} */}
              <h3 className="text-3xl md:text-4xl font-light text-zinc-900 mb-6 tracking-wide uppercase">{section.title}</h3>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-light">{section.content}</p>
              <div className="w-16 h-[2px] bg-zinc-300 mt-8"></div>
            </motion.div>

          </div>
        ))}
      </section>

      {/* --- Vision & Mission --- */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            <div className="w-full md:w-1/2 h-[250px] overflow-hidden rounded-lg relative">
              <img
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop"
                alt="Vision"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex gap-4 items-center mb-4">
                <div className="bg-amber-600/20 p-3 rounded-full"><Eye size={28} className="text-amber-500"/></div>
                <h4 className="text-2xl md:text-3xl font-light tracking-[2px] uppercase">Our Vision</h4>
              </div>
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
                To be the world's most cherished jewelry house, recognized not just for brilliance, but for artistic innovation and craftsmanship that transcends generations.
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            <div className="w-full md:w-1/2 h-[250px] overflow-hidden rounded-lg relative">
              <img
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=800&auto=format&fit=crop"
                alt="Mission"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex gap-4 items-center mb-4">
                <div className="bg-amber-600/20 p-3 rounded-full"><Target size={28} className="text-amber-500"/></div>
                <h4 className="text-2xl md:text-3xl font-light tracking-[2px] uppercase">Our Mission</h4>
              </div>
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
                Create exceptional jewelry that celebrates life's precious moments, while maintaining ethical sourcing, artisan empowerment, and sustainable luxury.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default AboutUs;