import React from 'react';
import { motion } from "motion/react"
import { toast } from 'react-toastify';


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const ContactUsSection = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you for your message! We will get back to you soon.");
  };

  return (
    <section className="py-16 sm:py-24 bg-[#c4e5f2] dark:bg-[#0f172a]" id="contact">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          
          {/* Contact Information & Header (Left Side) */}
          <div>
            <motion.h2
              className="text-base font-semibold text-indigo-600 tracking-wide uppercase"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={itemVariants}
            >
              Get in Touch
            </motion.h2>
            <motion.p
              className="mt-2 text-4xl font-bold text-[#04264e] dark:text-white sm:text-4xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={itemVariants}
            >
              We're Here to Help Your Scholarship Journey
            </motion.p>
            <motion.p
              className="mt-4 text-lg text-gray-500 dark:text-gray-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={itemVariants}
            >
              Have questions about application fees, eligibility, or post dates? Reach out to our dedicated support team.
            </motion.p>

            {/* Static Contact Details */}
            <motion.div
              className="mt-8 space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={containerVariants}
            >
              <motion.div className="flex items-start space-x-3" variants={itemVariants}>
                <span className=" pt-1 text-indigo-500">
                  
                  {/* Placeholder icon */} 📧
                </span>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">support@scholarshipfinder.com</p>
                </div>
              </motion.div>
              
              <motion.div className="flex items-start space-x-3" variants={itemVariants}>
                <span className="pt-1 text-indigo-500">
                  
                  {/* Placeholder icon */} 📞
                </span>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">+92 666 888 0000</p>
                </div>
              </motion.div>
              
              <motion.div className="flex items-start space-x-3" variants={itemVariants}>
                <span className=" pt-1 text-indigo-500">
                  
                  {/* Placeholder icon */} 📍
                </span>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Office</h3>
                  <p className="text-gray-600 dark:text-gray-300">666 road, Dhaka, Bangladesh</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Contact Form (Right Side) */}
          <div className="mt-12 lg:mt-0">
            <motion.form
              className="p-8 bg-gray-50 rounded-xl shadow-xl"
              onSubmit={handleSubmit}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              
              <motion.div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8" variants={containerVariants}>
                
                {/* Name */}
                <motion.div className="sm:col-span-1" variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </motion.div>

                {/* Email */}
                <motion.div className="sm:col-span-1" variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </motion.div>
                
                {/* Subject */}
                <motion.div className="sm:col-span-2" variants={itemVariants}>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </motion.div>

                {/* Message */}
                <motion.div className="sm:col-span-2" variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    defaultValue={''}
                  />
                </motion.div>

                {/* Button */}
                <motion.div className="sm:col-span-2" variants={itemVariants}>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#04264e] focus:outline-none transition duration-150 ease-in-out cursor-pointer"
                  >
                    Submit Message
                  </button>
                </motion.div>

              </motion.div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;