import React from "react";
import { motion } from "framer-motion";
import { MainContent } from "../../constants/MainContent";

const MapSection = () => {
  return (
    <section className="bg-[#FCFBFA] py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-20 h-[500px] relative">
        {/* Map */}
        <iframe
          title="Studio Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.216345607519!2d77.4301!3d23.232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEzJzU1LjIiTiA3N8KwMjUnNDguNCJF!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
          className="w-full h-full grayscale-[0.2] contrast-[1.1] rounded-xl"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>

        {/* Floating Card */}
        <div className="absolute inset-0 flex items-start justify-center md:justify-start p-6 md:p-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="pointer-events-auto bg-white p-6 shadow-2xl rounded-sm border border-zinc-100 max-w-[300px] w-full"
          >
            <h3 className="text-zinc-900 font-bold text-lg leading-tight">Our Studio</h3>
            <p className="text-zinc-500 text-xs leading-relaxed">{MainContent.address}</p>

            <div className="mt-4 pt-3 border-t border-zinc-100 flex justify-between items-center">
              <span className="text-[10px] text-amber-600 font-bold uppercase tracking-widest">
                Studio Open
              </span>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 text-[10px] font-bold hover:underline"
              >
                VIEW LARGER MAP
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;