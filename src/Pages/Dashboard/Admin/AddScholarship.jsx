import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddScholarship = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { register, handleSubmit, reset } = useForm()

    const handleAddScholarship = (data) => {

        axiosSecure.post('/add-scholarship', data)
            .then(res => {
                if (res.data.insertedId) {
                    reset()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Scholarship added successfully",
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            })

    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
            <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
                <h2 className="text-3xl font-extrabold text-[#324354] mb-8 border-b-4 border-indigo-100 pb-3">
                    📚 Add Scholarship: A form to create new scholarships
                </h2>

                <form onSubmit={handleSubmit(handleAddScholarship)} className="space-y-8">

                    {/* ================= General Details ================= */}
                    <div className="border-b border-gray-200 pb-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            General Details
                        </h3>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                                    defaultValue={user?.email}
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

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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

                        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-3">
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

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
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
    )
}

export default AddScholarship
