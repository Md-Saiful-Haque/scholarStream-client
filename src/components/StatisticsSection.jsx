import React from 'react';
import { motion } from "motion/react";

const StatisticsSection = () => {
  return (
    <motion.section className="py-24 bg-[#04264e] text-white">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-4 gap-10 text-center px-4">
        {[
          ["10K+", "Students"],
          ["500+", "Scholarships"],
          ["120+", "Universities"],
          ["98%", "Success Rate"],
        ].map(([value, label], i) => (
          <div key={i}>
            <h3 className="text-5xl font-extrabold">{value}</h3>
            <p className="mt-2 text-lg">{label}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default StatisticsSection;