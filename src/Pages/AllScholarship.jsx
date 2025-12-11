import React, { useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Container from '../components/Container';
import ScholarshipCard from '../components/ScholarshipCard';
import LoadingSpinner from './LoadingSpinner';

const AllScholarship = () => {
    const axiosSecure = useAxiosSecure()
    const [inputText, setInputText] = useState("");  // user typing
    const [search, setSearch] = useState("");

    const { data: scholarships = [], isLoading } = useQuery({
        queryKey: ['scholarships', search],
        queryFn: async () => {
            const res = await axiosSecure.get(`/scholarship?search=${search}`)
            return res.data
        }
    })

    const handleSearchClick = () => {
        setSearch(inputText); // now search will run
    };

    if(isLoading) return <LoadingSpinner />

    return (

        <div className='pt-10 bg-[#c4e5f2] pb-10'>
            <Container>
                <title></title>
                <div className='flex justify-between items-center mb-10 max-w-[1200px] mx-auto pt-4'>
                    <h2 className='font-bold text-3xl text-[#04264e]'>All Scholarship</h2>
                    <div className='flex justify-center gap-2 items-center'>
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
                <div className='max-w-[1200px] mx-auto grid grid-cols-3 gap-4'>
                    {
                        scholarships.map(scholarship => <ScholarshipCard key={scholarship._id} scholarship={scholarship}></ScholarshipCard>)
                    }
                </div>
            </Container>
        </div>

    );
};

export default AllScholarship;