import React, { useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ScholarshipCard from '../components/ScholarshipCard';
import LoadingSpinner from './LoadingSpinner';
import SkeletonLoader from '../components/SkeletonLoader';

const AllScholarship = () => {
    const axiosSecure = useAxiosSecure()
    const [inputText, setInputText] = useState("");
    const [search, setSearch] = useState("");
    const [country, setCountry] = useState("");
    const [subjectCategory, setSubjectCategory] = useState("")
    const [sort, setSort] = useState("");
    const [page, setPage] = useState(1);


    const { data, isLoading } = useQuery({
        queryKey: ['scholarships', search, country, sort, subjectCategory, page],
        queryFn: async () => {
            const res = await axiosSecure.get(`/scholarship?search=${search}&country=${country}&subjectCategory=${subjectCategory}&sort=${sort}&page=${page}`)
            return res.data
        }
    })

    const scholarships = data?.result || [];
    const total = data?.total || 0;
    const limit = 8;
    const totalPages = Math.ceil(total / limit);

    const handleSearchClick = () => {
        setSearch(inputText);
        setPage(1)
    };

    //if (isLoading) return <LoadingSpinner />

    return (
        <div className='pt-8 bg-[#c4e5f2] dark:bg-[#0f172a] pb-10'>
            <title>scholarStream AllScholarship</title>
            <div className='flex md:flex-row flex-col justify-between items-center mb-10 max-w-[1200px] mx-auto pt-4'>
                <h2 className='font-bold text-3xl text-[#04264e] dark:text-white'>All Scholarship</h2>
                <div className='flex md:flex-row flex-col justify-center gap-2 items-center'>
                    {/* SUBJECT CATEGORY */}
                    <select
                        value={subjectCategory}
                        onChange={(e) => {
                            setSubjectCategory(e.target.value);
                            setPage(1);
                        }}
                        className="select select-bordered mt-5 md:mt-0"
                    >
                        <option value="">All Subjects</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Science">Science</option>
                        <option value="Arts">Arts</option>
                    </select>

                    {/* COUNTRY FILTER */}
                    <select
                        value={country}
                        onChange={(e) => {
                            setCountry(e.target.value);
                            setPage(1);
                        }}
                        className="select select-bordered mt-5 md:mt-0"
                    >
                        <option value="">All Countries</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Canada">Canada</option>
                        <option value="Japan">Japan</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="South Africa">South Africa</option>
                        <option value="Brazil">Brazil</option>
                        <option value="China">China</option>
                    </select>

                    {/* SORT DROPDOWN */}
                    <select
                        value={sort}
                        onChange={(e) => {
                            setSort(e.target.value);
                            setPage(1);
                        }}
                        className="select select-bordered mt-5 md:mt-0"
                    >
                        <option value="">Sort By</option>
                        <option value="fees_desc">Fees: High → Low</option>
                        <option value="fees_asc">Fees: Low → High</option>
                        <option value="date_desc">Latest Scholarships</option>
                    </select>

                    <label className="input rounded-full">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>

                        <input
                            type="text"
                            placeholder="Search"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                        />
                    </label>

                    <button
                        onClick={handleSearchClick}
                        className='bg-[#04264e] px-8 py-2 text-white font-medium text-[16px] rounded-full'
                    >
                        Search
                    </button>

                </div>
            </div>
            <div className='max-w-[1200px] mx-auto'>
                {
                    isLoading ?
                        <SkeletonLoader /> :
                        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 p-3 md:p-0'>
                            {
                                scholarships.map(scholarship => <ScholarshipCard key={scholarship._id} scholarship={scholarship}></ScholarshipCard>)
                            }
                        </div>
                }
            </div>

            {/* PAGINATION GRADIENT UI */}
            <div className="flex justify-center mt-10">
                <div className="flex gap-2 items-center">

                    {/* PREV BUTTON */}
                    <button
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                        className={`
                px-5 py-2 rounded-xl text-white font-medium
                transition-all duration-300
                ${page === 1
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-linear-to-r from-blue-600 to-blue-800 hover:opacity-90 shadow-md"}
            `}
                    >
                        « Prev
                    </button>

                    {/* PAGE NUMBERS */}
                    <div className="flex gap-2">
                        {[...Array(totalPages)].map((_, idx) => {
                            const isActive = page === idx + 1;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => setPage(idx + 1)}
                                    className={`
                            w-10 h-10 flex items-center justify-center rounded-xl font-semibold
                            transition-all duration-300
                            ${isActive
                                            ? "bg-linear-to-r from-blue-600 to-blue-800 text-white shadow-lg scale-105"
                                            : "bg-white text-blue-700 border border-blue-300 hover:bg-blue-700 hover:text-white"}
                        `}
                                >
                                    {idx + 1}
                                </button>
                            );
                        })}
                    </div>

                    {/* NEXT BUTTON */}
                    <button
                        disabled={page === totalPages}
                        onClick={() => setPage(page + 1)}
                        className={`
                px-5 py-2 rounded-xl text-white font-medium
                transition-all duration-300
                ${page === totalPages
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-linear-to-r from-blue-600 to-blue-800 hover:opacity-90 shadow-md"}
            `}
                    >
                        Next »
                    </button>

                </div>
            </div>
        </div>

    );
};

export default AllScholarship;