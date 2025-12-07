import React from 'react';
import { Link } from 'react-router';

const ScholarshipCard = ({ scholarship }) => {
    const {
        _id,
        scholarshipName,
        universityName,
        image,
        city,
        country,
        scholarshipCategory,
        degree,
        worldRank,
        applicationFees,
        deadline,
        subjectCategory
    } = scholarship;

    return (
        <div className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden flex flex-col">
            {/* University Image */}
            <div className="relative h-48 w-full">
                <img
                    src={image}
                    alt={universityName}
                    className="w-full h-full object-cover"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
                        {scholarshipCategory}
                    </span>
                    <span className="bg-white/90 text-gray-700 text-xs px-3 py-1 rounded-full">
                        {degree}
                    </span>
                </div>

                {/* Rank */}
                <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded-xl text-xs font-medium">
                    Rank #{worldRank || "N/A"}
                </div>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-3 flex-1">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                        {scholarshipName}
                    </h3>
                    <p className="text-sm text-gray-500">
                        {universityName} • {city}, {country}
                    </p>
                </div>

                {/* Info Row */}
                <div className="flex items-center justify-between text-sm">
                    <div>
                        <p className="text-gray-500">Application Fee</p>
                        <p className="font-bold text-gray-900">
                            {applicationFees ? `$${applicationFees}` : "Free"}
                        </p>
                    </div>

                    <div className="text-right">
                        <p className="text-emerald-600 font-semibold">
                            {deadline}
                        </p>
                        <p className="text-xs text-gray-500">Deadline</p>
                    </div>
                </div>

                {/* Subject */}
                <div>
                    <span className="text-xs px-3 py-1 bg-gray-100 rounded-full">
                        {subjectCategory || "General"}
                    </span>
                </div>

                {/* Buttons (No functionality) */}
                <div className="mt-auto flex gap-3">
                        <button
                            type="button"
                            className="w-full border border-indigo-200 text-indigo-600 rounded-lg py-2 text-sm font-medium hover:bg-indigo-50 transition"
                        >
                           <Link to={`/scholarship/${_id}`}> View Details</Link>
                        </button>
                
                        <button
                            type="button"
                            className="w-full bg-[#04264e] text-white rounded-lg py-2 text-sm font-semibold transition"
                        >
                            Apply
                        </button>
                </div>
            </div>
        </div>
    );
};

export default ScholarshipCard;