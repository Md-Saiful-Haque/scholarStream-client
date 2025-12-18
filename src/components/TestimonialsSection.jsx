import React from 'react';
import TestimonialCard from './TestimonialCard';
import { motion } from "motion/react"

// Sample data for testimonials
const testimonialsData = [
  {
    quote: "Thanks to this platform, I found a scholarship that perfectly matched my goals. The process was incredibly smooth!",
    name: "Aisha Khan",
    title: "Computer Science Student, University of Toronto",
  },
  {
    quote: "The latest post date filter was a game-changer. I secured a last-minute scholarship that has completely changed my future.",
    name: "James O'Connell",
    title: "Engineering Graduate, MIT",
  },
  {
    quote: "Before this, scholarship searching was overwhelming. The clear details and low-fee focus saved me so much time and money.",
    name: "Mei Lin",
    title: "Arts & Design Scholar, UCL",
  },
];

const sectionVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-base font-semibold text-indigo-600 tracking-wide uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Success Stories
          </motion.h2>
          <motion.p
            className="mt-2 text-3xl font-extrabold text-[#04264e] sm:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hear from Our Scholarship Winners
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={sectionVariants}
          initial="initial" 
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              delay={0.2 * index} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;