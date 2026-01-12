import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import useAuth from "../../../hooks/useAuth"
import useAxiosSecure from "../../../hooks/useAxiosSecure"
import Swal from "sweetalert2"
import LoadingSpinner from "../../../Pages/LoadingSpinner"


const ManageScholarshipDataRow = ({ scholarship, refetch }) => {
  const { user, loading } = useAuth()
  const modalRef = useRef()
  const [scholarShip, setScholarShip] = useState([])
  const [defaultValue, setDefaultValue] = useState({})
  const axiosSecure = useAxiosSecure()
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: { ...defaultValue, email: user?.email }
  })

  const { _id, scholarshipName, universityName, degree, image, subjectCategory, scholarshipCategory } = scholarship || {}

  useEffect(() => {
    axiosSecure.get('/manage-scholarship')
      .then(res => {
        setScholarShip(res.data)
      })

  }, [axiosSecure])


  const handleUpdate = (id) => {
    modalRef.current.showModal()

    const findScholarShip = scholarShip.find(scholar => scholar._id == id)
    console.log(findScholarShip)
    for (let field in findScholarShip) {
      setValue(field, findScholarShip[field])
    }
    setDefaultValue({ ...findScholarShip, _id: id })
  }

  const handleUpdateScholarship = (data) => {
    axiosSecure.put(`/update-scholarship/${defaultValue._id}`, data)
      .then(res => {
        refetch()
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: 'Scholarship Updated!!',
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((res) => {
      if (res.isConfirmed) {
        axiosSecure.delete(`/delete-scholarship/${id}`)
          .then(res => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
            refetch()
          })
      }
    })
  }

  if(loading) return <LoadingSpinner />

  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={image}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>
        </div>
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900'>{scholarshipName}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900'>{universityName}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900'>{scholarshipCategory}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900'>{subjectCategory}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900'>{degree}</p>
      </td>

      <td className='px-5 py-8 border-b border-gray-200 bg-white text-sm flex gap-2'>
        <button
          onClick={() => handleUpdate(scholarship._id)}
          className='relative disabled:cursor-not-allowed cursor-pointer inline-block px-3 py-1 font-semibold text-lime-900 leading-tight'
        >
          <span className='absolute cursor-pointer inset-0 bg-red-200 opacity-50 rounded-full'></span>
          <span className='relative cursor-pointer'>Update</span>
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className='relative disabled:cursor-not-allowed cursor-pointer inline-block px-3 py-1 font-semibold text-lime-900 leading-tight'
        >
          <span className='absolute cursor-pointer inset-0 bg-red-200 opacity-50 rounded-full'></span>
          <span className='relative cursor-pointer'>Delete</span>
        </button>

        {/* update modal */}
        <dialog ref={modalRef} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            {/* scholarship update form */}
            <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
              <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
                <h2 className="text-3xl font-extrabold text-[#324354] mb-8 border-b-4 border-indigo-100 pb-3">
                  Update scholarship
                </h2>

                <form onSubmit={handleSubmit(handleUpdateScholarship)} className="space-y-8">

                  {/* ================= General Details ================= */}
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      General Details
                    </h3>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-1">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Scholarship Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          {...register("scholarshipName")}
                          required
                          placeholder="e.g., Global Merit Award 2026"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          University Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"

                          {...register("universityName")}
                          required
                          placeholder="e.g., State University of Technology"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Image (URL)
                        </label>
                        <input
                          type="url"

                          {...register("image")}
                          placeholder="https://example.com/logo.png"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          User Email <span className="text-red-500">*</span>
                        </label>
                        <input

                          type="email"
                          {...register("userEmail")}
                          required
                          placeholder="admin@organization.com"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-1 mt-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <textarea

                        {...register("description")}
                        placeholder="Write scholarship description here..."
                        className="block w-full h-32 px-4 py-3 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  {/* ================= Academic & Location ================= */}
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Academic & Location
                    </h3>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Country <span className="text-red-500">*</span>
                        </label>
                        <input

                          placeholder="Country"
                          {...register("country")}
                          required
                          className="input mt-2"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          City <span className="text-red-500">*</span>
                        </label>
                        <input

                          placeholder="City"
                          {...register("city")}
                          required
                          className="input mt-2"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          World Rank <span className="text-red-500">*</span>
                        </label>
                        <input

                          type="number"
                          placeholder="World Rank"
                          {...register("worldRank")}
                          className="input mt-2"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-1">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Subject Category <span className="text-red-500">*</span>
                        </label>
                        <select {...register("subjectCategory")} required className="input mt-2">
                          <option value="">Select Category</option>
                          <option value="Engineering">Engineering</option>
                          <option value="Arts">Arts & Humanities</option>
                          <option value="Science">Natural Sciences</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Scholarship Category <span className="text-red-500">*</span>
                        </label>
                        <select {...register("scholarshipCategory")} required className="input mt-2">
                          <option value="">Select Type</option>
                          <option value="Partial">Partial Funding</option>
                          <option value="Full">Fully Funded</option>
                          <option value="Research">Self-fund</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Degree <span className="text-red-500">*</span>
                        </label>
                        <select {...register("degree")} required className="input mt-2">
                          <option value="">Select Degree</option>
                          <option value="Bachelor">Bachelor's</option>
                          <option value="Master">Master's</option>
                          <option value="PhD">PhD</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* ================= Financials ================= */}
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Financials & Deadlines
                    </h3>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <input

                        type="number"
                        placeholder="Tuition Fees (Optional)"
                        {...register("tuitionFees")}
                        className="input"
                      />

                      <input

                        type="number"
                        placeholder="Application Fees"
                        {...register("applicationFees")}
                        required
                        className="input"
                      />

                      <input

                        type="number"
                        placeholder="Service Charge"
                        {...register("serviceCharge")}
                        required
                        className="input"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Deadline <span className="text-red-500">*</span>
                        </label>

                        <input

                          type="date"
                          {...register("deadline")}
                          required
                          className="input mt-2"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Post Date <span className="text-red-500">*</span>
                        </label>

                        <input

                          type="date"
                          {...register("postDate")}
                          className="input bg-gray-100 mt-2"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ================= Submit ================= */}
                  <div className="pt-5">
                    <button
                      type="submit"
                      className="w-full py-3 px-4 rounded-lg shadow-xl text-lg font-medium text-white bg-[#04264e] transition"
                    >
                      Submit New Scholarship
                    </button>
                  </div>

                </form>
              </div>
            </div>

            <div className="modal-action">
              <form method="dialog">
                
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </td>
    </tr>
  )
}

export default ManageScholarshipDataRow
