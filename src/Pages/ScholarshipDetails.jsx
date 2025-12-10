import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router';
import useAuth from '../hooks/useAuth';

const ScholarshipDetails = () => {
  const axiosSecure = useAxiosSecure()
  const { id } = useParams()
  const { user } = useAuth()
  

  const { data: scholarship = {}, reviews = [] } = useQuery({
    queryKey: ['scholarship', id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/scholarship/${id}`)
      return res.data
    }
  })

  const {
    _id,
    scholarshipName,
    universityName,
    image,
    city,
    country,
    description,
    scholarshipCategory,
    degree,
    worldRank,
    applicationFees,
    tuitionFees,
    deadline,
    subjectCategory,
    serviceCharge
  } = scholarship;

  const handleApply = async () => {
    const applicantInfo = {
      scholarshipId: _id,
      userName: user?.displayName,
      userEmail: user?.email,
      image,
      universityName,
      scholarshipName,
      scholarshipCategory,
      subjectCategory,
      city,
      country,
      degree,
      applicationFees,
      serviceCharge,
      applicationStatus: 'pending',
      paymentStatus: 'unpaid',
      applicationDate: new Date()
    }

    const res = await axiosSecure.post('/create-checkout-session', applicantInfo)
    window.location.href = res.data.url
  }


  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <img
            src={image}
            alt={universityName}
            className="w-full h-72 object-cover"
          />

          <div className="p-6 space-y-4">
            <h1 className="text-3xl font-bold text-gray-900">
              {scholarshipName}
            </h1>

            <p className="text-gray-600">
              {universityName} — {city}, {country}
            </p>

            <div className="flex flex-wrap gap-3 text-sm">
              <span className="bg-[#04264e] text-white px-3 py-1 rounded-full">
                {scholarshipCategory}
              </span>

              <span className="bg-gray-200 px-3 py-1 rounded-full">
                {degree}
              </span>

              <span className="bg-gray-200 px-3 py-1 rounded-full">
                {subjectCategory}
              </span>

              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                Rank #{worldRank}
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-4 pt-4">
              <div className="text-gray-700 space-y-1">
                <p>
                  <strong>Application Fee:</strong>{" "}
                  {applicationFees ? `$${applicationFees}` : "Free"}
                </p>
                {tuitionFees && (
                  <p>
                    <strong>Tuition Fee:</strong> ${tuitionFees}
                  </p>
                )}
                <p>
                  <strong>Deadline:</strong> {deadline}
                </p>
              </div>

              <div className="text-gray-700 space-y-1">
                <p>
                  <strong>Degree:</strong> {degree}
                </p>
                <p>
                  <strong>Subject:</strong> {subjectCategory}
                </p>
                {/* <p>
                  <strong>Coverage / Stipend:</strong>{" "}
                  {stipend || "Information not provided"}
                </p> */}
              </div>
            </div>

            {/* Apply Button */}
            <div className="pt-6">
              <Link>
                <button
                  onClick={handleApply}
                  type="button"
                  className="w-full md:w-auto bg-[#04264e] text-white px-10 py-3 rounded-xl transition text-lg font-medium"
                >
                  Apply for Scholarship
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-8 bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-3">
            Scholarship Description
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {description ||
              "No detailed description available for this scholarship."}
          </p>
        </div>

        {/* Reviews Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-6">Student Reviews</h2>

          {reviews.length === 0 ? (
            <p className="text-gray-500">
              No reviews submitted yet.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {reviews.map((review, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow p-5 flex gap-4"
                >
                  <img
                    src={review.userImage}
                    alt={review.userName}
                    className="w-14 h-14 rounded-full object-cover border"
                  />

                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">
                        {review.userName}
                      </h4>
                      <span className="text-sm text-yellow-500">
                        ⭐ {review.ratingPoint}/5
                      </span>
                    </div>

                    <p className="text-xs text-gray-500">
                      {review.reviewDate}
                    </p>

                    <p className="text-gray-700 mt-2">
                      {review.reviewComment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ScholarshipDetails;