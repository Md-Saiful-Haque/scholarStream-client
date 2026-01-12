import React from 'react';
import { motion } from "motion/react"

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const TestimonialCard = ({ quote, name, title, delay }) => {
  return (
    <motion.div
      className="bg-white dark:bg-[#1e293b] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
      variants={cardVariants}
      initial="initial"
      whileInView="animate" 
      viewport={{ once: true, amount: 0.3 }} 
      transition={{ duration: 0.6, delay: delay }}
    >
      <p className="text-gray-700 dark:text-white italic text-lg mb-4">
        "{quote}"
      </p>
      <div className="border-t border-gray-100 pt-4">
        <p className="font-semibold text-gray-900 dark:text-gray-300">{name}</p>
        <p className="text-sm text-indigo-600">{title}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;