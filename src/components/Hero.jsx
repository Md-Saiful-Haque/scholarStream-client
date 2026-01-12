import React from 'react';
import { motion } from "motion/react"
import SearchScholarshipButton from './SearchScholarshipButton';
import bgImg from '../assets/scholarship-bg.jpg'


const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
        duration: 0.8,
      },
    },
  };


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
      className="relative h-[80vh] bg-cover bg-center object-cover"
      style={{ backgroundImage: `url(${bgImg})` }} 
    >
      
      <div className="absolute inset-0 flex items-center justify-center">
        
        <motion.div
          className="text-center p-4 max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title */}
          <motion.h1
            className="text-4xl md:text-7xl font-extrabold text-white mb-4 leading-tight"
            variants={itemVariants}
          >
            Find Your <span className="text-yellow-400">Future</span> with ScholarStream
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl font-medium text-white mb-8 max-w-3xl mx-auto"
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