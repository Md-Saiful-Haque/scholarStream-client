import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import LoadingSpinner from '../../LoadingSpinner';
import { MdDeleteSweep } from 'react-icons/md';

const AllReviews = () => {
  const axiosSecure = useAxiosSecure()

  const { data: reviews = [], isLoading, refetch } = useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      const res = await axiosSecure.get('/all-reviews')
      return res.data
    }
  })

  if (isLoading) return <LoadingSpinner />

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 border-b pb-2">
          ⭐ All Scholarship Reviews
        </h2>

        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                >
                  Image
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                >
                  Scholarship Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                >
                  University Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                >
                  Reviewer Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                >
                  Rating
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                >
                  Comment
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs  font-bold text-gray-500 uppercase tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {
                reviews.map(review => <tr className="hover:bg-indigo-50/50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-400">
                    <img src={review?.userImage} alt="" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-400 font-semibold">
                    {review?.scholarshipName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {review?.universityName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-600">{review?.userName}</div>
                    <div className="text-xs text-gray-500">{review?.createdAt}</div>
                  </td>
                  <td className="px-6 py-4 max-w-xs truncate text-sm font-bold text-gray-600">
                    {review?.ratingPoint} Out of 5
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-sm text-wrap font-medium text-gray-600">
                      {review?.reviewComment}
                    
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                    <button className="btn btn-error btn-md text-white">
                      <MdDeleteSweep /> Delete
                    </button>
                  </td>
                </tr>)
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllReviews;