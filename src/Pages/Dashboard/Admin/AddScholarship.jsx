import React from 'react';

const AddScholarship = () => {
  return (
    <div class="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
    <div class="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
        <h2 class="text-3xl font-extrabold text-indigo-800 mb-8 border-b-4 border-indigo-100 pb-3">
            📚 Add Scholarship: A form to create new scholarships
        </h2>

        <form class="space-y-8">

            <div class="border-b border-gray-200 pb-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">General Details</h3>
                <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                    
                    <div>
                        <label for="scholarshipName" class="block text-sm font-medium text-gray-700">
                            Scholarship Name <span class="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="scholarshipName"
                            id="scholarshipName"
                            required
                            placeholder="e.g., Global Merit Award 2026"
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label for="universityName" class="block text-sm font-medium text-gray-700">
                            University Name <span class="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="universityName"
                            id="universityName"
                            required
                            placeholder="e.g., State University of Technology"
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label for="image" class="block text-sm font-medium text-gray-700">
                            Image (URL)
                        </label>
                        <input
                            type="url"
                            name="image"
                            id="image"
                            placeholder="e.g., https://example.com/logo.png"
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label for="userEmail" class="block text-sm font-medium text-gray-700">
                            User Email <span class="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="userEmail"
                            id="userEmail"
                            required
                            placeholder="e.g., admin@organization.com"
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>
            </div>
            
            <div class="border-b border-gray-200 pb-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Academic & Location</h3>
                <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
                    
                    <div>
                        <label for="country" class="block text-sm font-medium text-gray-700">
                            Country <span class="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="country"
                            id="country"
                            required
                            placeholder="e.g., Canada"
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label for="city" class="block text-sm font-medium text-gray-700">
                            City <span class="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="city"
                            id="city"
                            required
                            placeholder="e.g., Toronto"
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label for="worldRank" class="block text-sm font-medium text-gray-700">
                            World Rank
                        </label>
                        <input
                            type="number"
                            name="worldRank"
                            id="worldRank"
                            placeholder="e.g., 50"
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>

                <div class="grid grid-cols-1 gap-6 mt-6 md:grid-cols-3">
                    
                    <div>
                        <label htmlFor="subjectCategory" class="block text-sm font-medium text-gray-700">
                            Subject Category <span class="text-red-500">*</span>
                        </label>
                        <select
                            name="subjectCategory"
                            id="subjectCategory"
                            required
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="">Select Category</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Arts">Arts & Humanities</option>
                            <option value="Science">Natural Sciences</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="scholarshipCategory" class="block text-sm font-medium text-gray-700">
                            Scholarship Category <span class="text-red-500">*</span>
                        </label>
                        <select
                            name="scholarshipCategory"
                            id="scholarshipCategory"
                            required
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="">Select Type</option>
                            <option value="Partial">Partial Funding</option>
                            <option value="Full">Fully Funded</option>
                            <option value="Research">Research Grant</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="degree" class="block text-sm font-medium text-gray-700">
                            Degree <span class="text-red-500">*</span>
                        </label>
                        <select
                            name="degree"
                            id="degree"
                            required
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="">Select Degree</option>
                            <option value="Bachelor">Bachelor's</option>
                            <option value="Master">Master's</option>
                            <option value="PhD">PhD</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="border-b border-gray-200 pb-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Financials & Deadlines</h3>
                <div class="grid grid-cols-1 gap-6 md:grid-cols-4">
                    
                    <div>
                        <label for="tuitionFees" class="block text-sm font-medium text-gray-700">
                            Tuition Fees (USD)
                        </label>
                        <input
                            type="number"
                            name="tuitionFees"
                            id="tuitionFees"
                            placeholder="e.g., 25000 (Optional)"
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label for="applicationFees" class="block text-sm font-medium text-gray-700">
                            Application Fees (USD) <span class="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            name="applicationFees"
                            id="applicationFees"
                            required
                            placeholder="e.g., 100"
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label for="serviceCharge" class="block text-sm font-medium text-gray-700">
                            Service Charge (USD) <span class="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            name="serviceCharge"
                            id="serviceCharge"
                            required
                            placeholder="e.g., 50"
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>
                
                <div class="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
                    
                    <div>
                        <label for="deadline" class="block text-sm font-medium text-gray-700">
                            Deadline <span class="text-red-500">*</span>
                        </label>
                        <input
                            type="date"
                            name="deadline"
                            id="deadline"
                            required
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label for="postDate" class="block text-sm font-medium text-gray-700">
                            Post Date 
                        </label>
                        <input
                            type="date"
                            name="postDate"
                            id="postDate"
                            value="2025-12-07" 
                            readonly
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 bg-gray-50 rounded-lg shadow-sm sm:text-sm cursor-not-allowed"
                        />
                    </div>
                </div>
            </div>

            <div class="pt-5">
                <button
                    type="submit"
                    class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-xl text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
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
