import React from 'react';

const About = () => {
    return (
        <div className="max-w-[1200px] mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-[#04264e] dark:text-white text-center mb-6">
                About ScholarStream
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-10">
                ScholarStream is a modern scholarship management platform designed to
                connect students with global educational opportunities in a simple,
                transparent, and secure way.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="card bg-base-100 dark:bg-[#1e293b] shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title text-[#04264e] dark:text-white">Our Mission</h2>
                        <p className='dark:text-gray-300'>
                            To simplify the scholarship discovery and application process and
                            empower students to achieve their academic dreams.
                        </p>
                    </div>
                </div>

                <div className="card bg-base-100 dark:bg-[#1e293b] shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title text-[#04264e] dark:text-white">Our Vision</h2>
                        <p className='dark:text-gray-300'>
                            To become a trusted global platform that ensures equal access to
                            educational funding opportunities for students worldwide.
                        </p>
                    </div>
                </div>

                <div className="card bg-base-100 dark:bg-[#1e293b] shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title text-[#04264e] dark:text-white">Why ScholarStream?</h2>
                        <ul className="list-disc list-inside space-y-1 dark:text-gray-300">
                            <li>Verified scholarships</li>
                            <li>Secure payment system</li>
                            <li>Role-based dashboards</li>
                            <li>Transparent application tracking</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;