import React from 'react';

const Blog = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#04264e] dark:text-white">
        ScholarStream Blog
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Blog Card 1 */}
        <div className="card bg-base-100 dark:bg-[#1e293b] shadow-lg">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
              alt="Scholarship Search"
              className="h-48 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              How to Find the Right Scholarship
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Learn how to search smartly, understand eligibility requirements,
              and avoid common scholarship application mistakes.
            </p>
            <div className="card-actions justify-end">
              <button className="btn w-full border border-indigo-200 text-indigo-600 rounded-lg hover:text-white hover:bg-[#04264e]">
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="card bg-base-100 dark:bg-[#1e293b] shadow-lg">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Strong Application"
              className="h-48 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Tips for a Strong Application
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Discover expert tips to write compelling personal statements and
              submit a successful scholarship application.
            </p>
            <div className="card-actions justify-end">
              <button className="btn w-full border border-indigo-200 text-indigo-600 rounded-lg hover:text-white hover:bg-[#04264e]">
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="card bg-base-100 dark:bg-[#1e293b] shadow-lg">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
              alt="Study Abroad"
              className="h-48 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Studying Abroad with Scholarships
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Planning to study abroad? Learn how scholarships can reduce your
              financial burden and open global opportunities.
            </p>
            <div className="card-actions justify-end">
              <button className="btn w-full border border-indigo-200 text-indigo-600 rounded-lg hover:text-white hover:bg-[#04264e]">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

