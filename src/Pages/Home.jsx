import React from 'react';
import HeroSection from '../components/HeroSection';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { Link } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import ScholarshipCard from '../components/ScholarshipCard';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactUsSection from '../components/ContactUsSection';

const Home = () => {
    const axiosSecure = useAxiosSecure()

    const { data: scholarships = [] } = useQuery({
    queryKey: ['scholarships'],
    queryFn: async () => {
      const res = await axiosSecure.get('/latest-scholarship')
      return res.data
    }
   })

    return (
        <>
            <HeroSection />
            <div className='pt-8 bg-[#c4e5f2]'>
                <h2 className='text-center font-extrabold p-8 text-3xl text-[#04264e]'>Latest Scholarship</h2>
                <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 p-3 md:p-0 gap-4 mt-5'>
                    {
                        scholarships.map(scholarship => <ScholarshipCard key={scholarship._id} scholarship={scholarship}></ScholarshipCard>)
                    }
                </div>
                <div className='mt-10 pb-10 flex justify-center items-center'>
                    <Link to={'/all-scholarships'}><button className='bg-[#04264e] px-8 py-2 rounded-md text-white font-medium text-[16px]'>Show More</button></Link>
                </div>
                <TestimonialsSection />
                <ContactUsSection />
            </div>
        </>
    );
};

export default Home;