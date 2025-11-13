import React from "react";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <section className="min-h-screen bg-zinc-600 flex flex-col md:flex-row items-center justify-between md:px-20 px-6 py-12">
      
     
      <motion.div
        className="max-w-lg space-y-5 text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 leading-snug sm:leading-tight">
          Discover the{" "}
          <span className="text-amber-400">scent</span> that defines your essence
        </h1>

        <p className="text-gray-200/90 text-base sm:text-lg px-2 md:px-0">
          Where elegance meets individuality — explore fragrances that reflect your personality.
        </p>

        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="bg-amber-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-amber-600 transition-all duration-300 shadow-md"
        >
          Discover Your Scent
        </motion.button>
      </motion.div>

     
      <motion.div
        className="relative flex items-center justify-center mt-10 md:mt-0 w-full md:w-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
     
        <motion.div
          className="absolute w-44 h-44 sm:w-64 sm:h-64 bg-amber-200/40 rounded-full blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.2 }}
        ></motion.div>

       
        <div className="relative flex gap-3 sm:gap-6 items-end">
          <motion.img
            src="/image/first.png"
            alt="Perfume 1"
            className="w-24 h-40 sm:w-32 sm:h-52 object-contain rounded-2xl shadow-lg -rotate-3"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
          />

          <motion.img
            src="/image/sec.png"
            alt="Perfume 2"
            className="w-28 h-48 sm:w-40 sm:h-64 object-contain rounded-2xl shadow-xl z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1, ease: 'easeOut' }}
            whileHover={{ scale: 1.1 }}
          />

          <motion.img
            src="/image/third.png"
            alt="Perfume 3"
            className="w-24 h-40 sm:w-32 sm:h-52 object-contain rounded-2xl shadow-lg rotate-3"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </motion.div>
        
    </section>
   
  );
};

export default Hero;


