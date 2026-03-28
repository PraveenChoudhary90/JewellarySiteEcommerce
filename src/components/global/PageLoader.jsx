import { motion } from "framer-motion";
import { MainContent } from "../../constants/MainContent";

const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F4F7F4]/10 backdrop-blur-md"
    >
      <div className="relative w-32 h-32 flex items-center justify-center">
        <motion.div
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-12 h-12 bg-[#3D4F45] rounded-full shadow-[0_0_30px_rgba(61,79,69,0.3)] z-10"
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-t-2 border-r-2 border-transparent border-t-[#9DB29B] border-r-[#9DB29B] rounded-full w-20 h-20 m-auto"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-b-2 border-l-2 border-transparent border-b-[#3D4F45] border-l-[#3D4F45] rounded-full w-full h-full"
        />

        <div className="absolute inset-0 bg-[#9DB29B] rounded-full blur-[60px] opacity-20 animate-pulse"></div>
      </div>

      <div className="mt-10 flex flex-col items-center space-y-3">
        <h2 className="text-2xl font-serif text-[#3D4F45] tracking-widest uppercase">
          {MainContent.appName}
        </h2>

        <div className="w-48 h-1 bg-[#3D4F45]/10 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-[#3D4F45] to-transparent opacity-80"
          />
        </div>

        <p className="text-[9px] font-bold text-[#9DB29B] uppercase tracking-[0.3em]">
          Loading...
        </p>
      </div>
    </motion.div>
  );
};

export default PageLoader;
