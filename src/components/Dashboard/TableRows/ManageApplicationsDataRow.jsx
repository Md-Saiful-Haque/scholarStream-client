import { useState } from "react"
import ApplicationDetailsModal from "../../Modal/ApplicationDetailsModal"
import { FaInfoCircle } from "react-icons/fa"
import { MdOutlineFeedback } from "react-icons/md";
import FeedbackModal from "../../Modal/FeedbackModal";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const ManageApplicationsDataRow = ({ application, refetch }) => {
  const axiosSecure = useAxiosSecure()
  const [applications, setApplications] = useState(null)
  const [feedbackId, setFeedbackId] = useState(null)

  const { userName, userEmail, universityName, applicationStatus, paymentStatus, feedback } = application

  const handleChangeStatus = async (id, updatedStatus) => {
    const res = await axiosSecure.patch(`/update-status/${id}`, { status: updatedStatus })
    refetch()
    return res.data
  }

  const handleCancel = (id) => {
    axiosSecure.patch(`/rejected-application/${id}`)
      .then(res => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Rejected!",
            text: "Your scholarship has been rejected.",
            icon: "success"
          });
        }
        refetch()
      })
  }

  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 '>{userName}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 '>{userEmail}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 '>{universityName}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 '>{feedback}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 '>{paymentStatus}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 '>{applicationStatus}</p>
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center gap-2'>
          <select
            //value={statusUpdate}
            onChange={(e) => handleChangeStatus(application._id, e.target.value)}
            required
            className='p-1 border-2 border-[#04264e] focus:outline-[#04264e] rounded-md text-gray-900  bg-white'
            name='category'
          >
            <option value='pending'>Pending</option>
            <option value='processing'>Start Processing</option>
            <option value='completed'>Completed</option>
          </select>

          <button
            className="btn btn-info btn-sm"
            onClick={() => setApplications(application)}
          >
            <FaInfoCircle /> Details
          </button>

          <button
            className="btn btn-warning btn-sm"
            onClick={() => setFeedbackId(application._id)}
          >
            <MdOutlineFeedback /> Feedback
          </button>

          <button
            onClick={() => handleCancel(application._id)}
            className='relative disabled:cursor-not-allowed cursor-pointer inline-block px-3 py-2 font-semibold text-green-900 leading-tight'
          >
            <span
              aria-hidden='true'
              className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
            ></span>
            <span className='relative'>Cancel</span>
          </button>
        </div>
        {applications &&
          <ApplicationDetailsModal
            application={applications}
            onClose={() => setApplications(null)}
          />
        }

        {feedbackId &&
          <FeedbackModal
            feedbackId={feedbackId}
            refetch={refetch}
            onClose={() => setFeedbackId(null)}
          />
        }

      </td>
    </tr>
  )
}

export default ManageApplicationsDataRow
