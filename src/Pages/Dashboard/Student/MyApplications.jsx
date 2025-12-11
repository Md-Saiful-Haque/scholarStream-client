import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import { FaEdit, FaInfoCircle, FaMoneyBillWave, FaStar } from 'react-icons/fa';
import AddReviewModal from '../../../components/Modal/AddReviewModal';
import DetailsModal from '../../../components/Modal/DetailsModal';
import LoadingSpinner from '../../LoadingSpinner';

const MyApplications = () => {
  const { user } = useAuth()
  const axiosSecure = useAxiosSecure()
  const [selectedApp, setSelectedApp] = useState(null);
  const [reviewApp, setReviewApp] = useState(null);

  console.log(selectedApp)

  const { data: applications = [], isLoading } = useQuery({
    queryKey: ['applications', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-applications/${user?.email}`)
      return res.data
    }
  })

  const handlePayment = async (app) => {
    const applicantInfo = {
      scholarshipId: app.scholarshipId,
      userName: app.userName,
      userEmail: app.userEmail,
      image: app.image,
      universityName: app.universityName,
      scholarshipName: app.scholarshipName,
      scholarshipCategory: app.scholarshipCategory,
      subjectCategory: app.subjectCategory,
      city: app.city,
      country: app.country,
      degree: app.degree,
      applicationFees: app.applicationFees,
      serviceCharge: app.serviceCharge,
      applicationStatus: 'pending',
      paymentStatus: 'unpaid',
      applicationDate: new Date()
    }

    const res = await axiosSecure.post('/create-checkout-session', applicantInfo);
    window.location.assign(res.data.url)
  }

  if(isLoading) return <LoadingSpinner />

  return (
    <div className="p-6">

      <h2 className="text-3xl font-bold mb-6">My Applications</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">

          <thead>
            <tr>
              <th>University</th>
              <th>Address</th>
              <th>Feedback</th>
              <th>Subject</th>
              <th>Fees</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>


          <tbody>
            {applications.map(app => (
              <tr key={app._id}>

                <td>{app.universityName}</td>

                <td>
                  {app.city}, {app.country}
                </td>

                <td>{app.feedback || "-"}</td>

                <td>{app.subjectCategory}</td>

                <td>${app.applicationFees}</td>

                <td>{app.applicationStatus}</td>


                <td className="space-x-2 flex gap-1.5">

                  {/* ✅ Details */}
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => setSelectedApp(app)}
                  >
                    <FaInfoCircle /> Details
                  </button>


                  {/* ✅ Edit (Pending only) */}
                  {app.applicationStatus === "pending" && (
                    <button className="btn btn-warning btn-sm">
                      <FaEdit /> Edit
                    </button>
                  )}


                  {/* ✅ Pay (Pending + unpaid) */}
                  {app.applicationStatus === "pending" &&
                    app.paymentStatus === "unpaid" && (
                      <button onClick={() => handlePayment(app)} className="btn btn-success btn-sm">
                        <FaMoneyBillWave /> Pay
                      </button>
                    )}


                  {/* ✅ Add Review (Completed only) */}
                  {app.applicationStatus === "completed" && (
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => setReviewApp(app)}
                    >
                      <FaStar /> Add Review
                    </button>
                  )}

                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* ✅ Details Modal */}
      {selectedApp && (
        <DetailsModal
          app={selectedApp}
          onClose={() => setSelectedApp(null)}
        />
      )}

      {/* ✅ Add Review Modal */}
      {reviewApp && (
        <AddReviewModal
          app={reviewApp}
          onClose={() => setReviewApp(null)}
        />
      )}

    </div>
  );
};

export default MyApplications;