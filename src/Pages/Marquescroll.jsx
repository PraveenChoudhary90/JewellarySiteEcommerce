import React from "react";
import { motion } from "framer-motion";

const FullEcommerceMarquee = () => {
  const ecomFeatures = [
    "24/7 Support",
    "High Quality Gemstone",
    "Free Delivery",
    "Money Back Guarantee",
  ];

  const scrollItems = [...ecomFeatures, ...ecomFeatures];

  return (
    <div className="w-full overflow-hidden bg-[#f5f2ed] border-y border-gray-300 py-3 ">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 12, // slow premium feel
          repeat: Infinity,
        }}
      >
        {scrollItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center px-6 text-[15px] tracking-wide text-gray-700"
          >
            <span>{item}</span>

            {/* diamond separator like theme */}
            <span className="mx-4 text-gray-400">◇</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FullEcommerceMarquee;