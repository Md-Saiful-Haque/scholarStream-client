import React from 'react';
import { motion } from "motion/react";
import { Link } from 'react-router';


const CTASection = () => {
  return (
    <motion.section className="py-28 bg-[#c4e5f2] dark:bg-[#0f172a] text-center">
      <h2 className="text-4xl font-bold text-[#04264e] dark:text-white mb-6">
        Start Your Scholarship Journey Today
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        Discover opportunities that match your academic goals.
      </p>
      <Link to="/all-scholarships">
        <button className="px-10 py-4 bg-[#04264e] text-white rounded-lg font-semibold">
          Explore Scholarships
        </button>
      </Link>
    </motion.section>
  );
};

export default CTASection;