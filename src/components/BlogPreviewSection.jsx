import React from 'react';
import { motion } from "motion/react";
import { Link } from 'react-router';


const BlogPreviewSection = () => {
  const blogs = [
    {
      title: "Smart Scholarship Search Tips",
      desc: "Learn how to find verified scholarships that perfectly match your academic profile.",
    },
    {
      title: "How to Write a Winning Application",
      desc: "Improve your personal statement and stand out among thousands of applicants.",
    },
    {
      title: "Avoid Common Scholarship Mistakes",
      desc: "Discover the most common errors students make and how to avoid them easily.",
    },
  ];

  return (
    <motion.section className="py-28 bg-white dark:bg-[#0f172a]">
      {/* Section Header */}
      <div className="text-center mb-20 px-4">
        <h2 className="text-4xl font-bold text-[#04264e] dark:text-white mb-4">
          Scholarship Tips & Guides
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Practical advice and expert insights to help you succeed in your
          scholarship journey.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            className="bg-[#c4e5f2]  dark:bg-[#1e293b] rounded-2xl p-10 shadow-md flex flex-col justify-between"
          >
            <div>
              <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-white text-[#04264e]">
                Scholarship Tips
              </span>

              <h3 className="text-2xl font-bold text-[#04264e] dark:text-white mb-4">
                {blog.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {blog.desc}
              </p>
            </div>

            <div className="mt-8">
              <Link
                to="/blog"
                className="inline-flex items-center font-semibold text-[#04264e] hover:underline dark:text-indigo-600"
              >
                Read Full Article →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default BlogPreviewSection;
