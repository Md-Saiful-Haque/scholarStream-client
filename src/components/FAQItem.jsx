import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiChevronDown } from 'react-icons/fi'; 

const FAQItem = ({ question, answer, delay }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div
      className="border-b border-gray-200"
      // Animation for the item sliding into view
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <button
        className="flex justify-between items-center w-full py-4 text-left text-lg font-medium text-gray-900 dark:text-white focus:outline-none"
        onClick={toggleOpen}
      >
        <span>{question}</span>
        <span className="text-indigo-600">
          {/* Chevron icon that rotates based on 'isOpen' state */}
          <FiChevronDown
            className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
          />
        </span>
      </button>

      {/* Animation for the answer content (smooth collapse/expand) */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-gray-600 dark:text-gray-300 pr-8">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQItem;