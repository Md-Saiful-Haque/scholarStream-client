import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import LoadingSpinner from '../../LoadingSpinner';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteSweep } from "react-icons/md";
import MyReviewsEditModal from '../../../components/Modal/MyReviewsEditModal';

const MyReview = () => {
  const { user } = useAuth()
  const axiosSecure = useAxiosSecure()
  const [myReviews, setMyReviews] = useState(null);

  const { data: reviews = [], isLoading, refetch } = useQuery({
    queryKey: ['reviews', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-reviews/${user?.email}`)
      return res.data
    }
  })

  if (isLoading) return <LoadingSpinner />

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 border-b pb-2">
          ⭐ My Reviews
        </h2>

        <div className="shadow border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Scholarship Name

                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  University Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Review Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Review Comment
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
                  Actions
                </th>
              </tr>
            </thead>
            {/* The tbody is left empty here, as data mapping is excluded */}
            <tbody className="bg-white divide-y divide-gray-200">
              {
                reviews.map(review => <tr key={review._id} className="hover:bg-indigo-50/50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-400">
                    {review.scholarshipName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-400 font-semibold">
                    {review.universityName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-400">{review.userName}</div>
                    <div className="text-xs text-gray-400">{review.
                      createdAt}</div>
                  </td>
                  <td className="px-6 py-4 text-wrap text-sm text-gray-600">
                    {review.reviewComment}
                  </td>
                  <td className="px-6 py-4 text-md text-gray-500">
                    {review.ratingPoint} Out of 5
                  </td>
                  <td className="px-6 py-4 flex gap-1.5">
                    <button onClick={() => setMyReviews(review)} className="btn btn-warning btn-sm">
                      <FaEdit /> Edit
                    </button>
                    <button className="btn btn-error btn-sm">
                      <MdDeleteSweep /> Delete
                    </button>
                  </td>
                </tr>)
              }

            </tbody>
          </table>
        </div>
      </div>
      
      {myReviews && (
        <MyReviewsEditModal
          myReviews={myReviews}
          refetch={refetch}
          onClose={() => setMyReviews(null)}
        />
      )}
    </div>
  );
};

export default MyReview;