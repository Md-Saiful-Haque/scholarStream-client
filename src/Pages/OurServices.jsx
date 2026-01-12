import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router";


const OurServices = () => {
  const services = [
    {
      title: "Scholarship Discovery",
      desc: "Browse thousands of verified scholarships from top universities worldwide based on your degree and subject.",
      icon: "🎓",
    },
    {
      title: "Online Application System",
      desc: "Apply to scholarships easily with a streamlined and user-friendly application process.",
      icon: "📝",
    },
    {
      title: "Secure Online Payments",
      desc: "Pay application fees securely through Stripe with instant confirmation and tracking.",
      icon: "💳",
    },
    {
      title: "Application Tracking",
      desc: "Track your scholarship application status from submission to final decision in real time.",
      icon: "📊",
    },
    {
      title: "Moderator Feedback",
      desc: "Receive professional feedback and guidance from moderators to improve your chances.",
      icon: "💬",
    },
    {
      title: "Student Reviews & Ratings",
      desc: "Read and share real experiences through reviews and ratings of scholarships and universities.",
      icon: "⭐",
    },
  ];

  return (
    <section className= "py-28">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto px-4 mb-20">
        <motion.h1 className="text-4xl font-bold text-[#04264e] mb-6">
          Our Services
        </motion.h1>
        <motion.p className="text-lg text-gray-700">
          ScholarStream provides a complete scholarship management solution to
          help students, moderators, and administrators work seamlessly.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl p-10 shadow-md hover:shadow-xl transition"
          >
            <div className="text-5xl mb-6">{service.icon}</div>
            <h3 className="text-2xl font-bold text-[#04264e] mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
