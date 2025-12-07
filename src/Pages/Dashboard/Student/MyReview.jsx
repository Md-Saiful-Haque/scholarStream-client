import React from 'react';

const MyReview = () => {
    return (
        <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 border-b pb-2">
          ⭐ My Reviews
        </h2>

        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Scholarship
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Reviewer / Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Rating
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Comment
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            {/* The tbody is left empty here, as data mapping is excluded */}
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Place your review data mapping logic here when adding functionality */}
              
              {/* --- Example Row Markup (For visual structure only, can be removed) --- */}
              <tr className="hover:bg-indigo-50/50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-400">
                  (Data placeholder)
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-400 font-semibold">
                  Scholarship Title
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-400">Reviewer Name</div>
                  <div className="text-xs text-gray-300">Submitted: 2025-00-00</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  ★★★★☆
                </td>
                <td className="px-6 py-4 max-w-xs truncate text-sm text-gray-400">
                  (Comment Snippet...)
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-200 text-gray-600">
                    Status
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    View
                  </a>
                  <span className="text-gray-200">|</span>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    Action
                  </a>
                </td>
              </tr>
              {/* --- End Example Row --- */}

            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
};

export default MyReview;