import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Container from '../components/Container';
import ScholarshipCard from '../components/ScholarshipCard';

const AllScholarship = () => {
    const axiosSecure = useAxiosSecure()

    const { data: scholarships = [] } = useQuery({
        queryKey: ['scholarships'],
        queryFn: async () => {
            const res = await axiosSecure.get('/scholarship')
            return res.data
        }
    })

    return (

        <div className='pt-10 bg-[#c4e5f2] pb-10'>
            <Container>
                <title></title>
                <div className='flex justify-between items-center mb-10 max-w-[1200px] mx-auto pt-4'>
                    <h2 className='font-bold text-3xl text-[#04264e]'>All Scholarship</h2>
                    <form className='flex justify-center gap-2 items-center'>
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
                            <input name='search' type="search" required placeholder="Search" />
                        </label>
                        <button className='bg-[#04264e] px-8 py-2 text-white font-medium text-[16px] rounded-full'>Search</button>
                    </form>
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