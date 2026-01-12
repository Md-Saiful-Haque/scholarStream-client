import React from 'react';
import { motion } from "motion/react";

const FeaturesSection = () => {
  const features = [
    "Verified Scholarships",
    "Secure Online Payments",
    "Role-Based Dashboards",
    "Application Tracking",
    "Moderator Feedback",
    "Global Universities",
  ];

  return (
    <motion.section className="py-24 bg-white dark:bg-[#0f172a]">
      <h2 className="text-4xl font-bold text-center text-[#04264e] dark:text-white mb-16">
        Platform Features
      </h2>

      <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-10 px-4">
        {features.map((item, i) => (
          <div key={i} className="bg-[#c4e5f2] dark:bg-[#1e293b] rounded-xl p-10 text-center shadow">
            <h3 className="text-xl font-semibold text-[#04264e] dark:text-white">{item}</h3>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default FeaturesSection;