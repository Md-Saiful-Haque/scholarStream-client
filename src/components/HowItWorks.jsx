import React from 'react';
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    "Search Scholarships",
    "Apply Online",
    "Make Secure Payment",
    "Track Application",
  ];

  return (
    <motion.section className="py-28 bg-base-100 dark:bg-[#0f172a]">
      <h2 className="text-4xl font-bold text-center text-[#04264e] dark:text-white mb-16">
        How ScholarStream Works
      </h2>

      <div className="max-w-[1200px] mx-auto grid md:grid-cols-4 gap-10 px-6">
        {steps.map((step, idx) => (
          <div key={idx} className="card dark:bg-[#1e293b] shadow">
            <div className="card-body text-center py-12">
              <span className="text-5xl font-bold text-[#04264e] dark:text-white">
                {idx + 1}
              </span>
              <p className="mt-4 text-lg dark:text-gray-300">{step}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default HowItWorks;