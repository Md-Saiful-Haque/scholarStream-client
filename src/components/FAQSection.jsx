// src/components/FAQSection.jsx
import React from 'react';
import { motion } from "motion/react"
import FAQItem from './FAQItem';
import Container from './Container';

// Data for the F.A.Q. items
const faqData = [
  {
    question: "How often is the scholarship list updated?",
    answer: "Our list is updated daily. We prioritize adding the most recent scholarships, especially those with deadlines within the next 30-90 days, and verifying the lowest application fees.",
  },
  {
    question: "Can I filter scholarships by the application fee?",
    answer: "Yes! Our platform features a unique filter that allows you to sort by the lowest application fees or even filter for only 'No-Fee' applications, as highlighted in our Top Scholarships section.",
  },
  {
    question: "Do I need to create an account to view details?",
    answer: "No, you can browse all scholarship details without an account. However, creating a free account allows you to save favorites and set up customized deadline reminders.",
  },
  {
    question: "What is the difference between a scholarship and a grant?",
    answer: "Both are forms of 'free money' that don't need to be repaid. Generally, scholarships are merit-based (academics, athletics, etc.), while grants are typically need-based.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-10 sm:py-24 bg-[#a4b7a6]">
    <Container>    
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Title Animation */}
          <motion.h2
            className="text-base font-semibold text-indigo-600 tracking-wide uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Need Answers?
          </motion.h2>
          <motion.p
            className="mt-2 text-3xl font-extrabold text-[#04264e] sm:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Frequently Asked Questions
          </motion.p>
        </div>

        {/* FAQ Container */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-3 rounded-xl shadow-lg divide-y divide-gray-200">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                delay={0.1 * index} // Staggered entry animation
              />
            ))}
          </div>
        </div>
      </div>
      </Container>
    </section>
  );
};

export default FAQSection;