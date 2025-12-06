import React from 'react';
import { motion } from "motion/react"
import SearchScholarshipButton from './SearchScholarshipButton';
// You will need to install framer-motion: npm install framer-motion

const HeroSection = () => {
  // Define animation variants for the main container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between children animations
        duration: 0.8,
      },
    },
  };

  // Define animation variants for individual text/button elements
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };
  
  // Variant for the button to include a slight scale-up effect
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 150, delay: 0.6 } },
  };

  return (
    <div 
      className="relative h-[60vh] md:h-[80vh] bg-cover bg-center"
      // Replace with your actual image path or URL
      style={{ backgroundImage: `url('/images/scholarship-bg.jpg')` }} 
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        
        <motion.div
          className="text-center p-4 max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-4 leading-tight"
            variants={itemVariants}
          >
            Find Your <span className="text-yellow-400">Future</span> with ScholarStream
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Simplifying the search for financial aid. Discover, apply, and secure the scholarship that's right for your education.
          </motion.p>

          {/* Search Scholarship Button */}
          <motion.div
            variants={buttonVariants}
          >
            <SearchScholarshipButton />
          </motion.div>
          
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;