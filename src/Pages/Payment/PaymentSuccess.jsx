import React, { useEffect, useState } from 'react';
import { IoBagCheckOutline } from 'react-icons/io5'
import { Link, useSearchParams } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const PaymentSuccess = () => {
    const axiosSecure = useAxiosSecure()
    const [applicantData, setApplicantData] = useState(null)
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id')

    useEffect(() => {
        if (sessionId) {
            axiosSecure.post("/payment-success", { sessionId })
                .then(res => {
                    if (res.data.success) {
                        //console.log(res.data.success)
                        setApplicantData(res.data.data)
                        console.log(res.data, res)

                    }
                })
        }

    }, [axiosSecure, sessionId]);


    return (
        <div className='flex flex-col items-center justify-center mt-10'>
            <div className='bg-white p-10 rounded-lg shadow-lg text-center'>
                <IoBagCheckOutline className='w-16 h-16 text-[#04264e] mx-auto mb-4' />
                <h1 className='text-3xl font-bold text-gray-800 mb-2'>
                    Payment Successful!
                </h1>

                {/* ✅ Scholarship Details */}
                <div className='text-left space-y-2 mb-6'>

                    <p>
                        <strong>Scholarship:</strong>
                         {applicantData?.scholarshipName}
                    </p>

                    <p>
                        <strong>University:</strong>
                         {applicantData?.universityName}
                    </p>

                    <p>
                        <strong>Amount Paid:</strong>
                         ${applicantData?.paidAmount}
                    </p>

                    <p className='text-md text-gray-500'>
                        <strong>Transaction ID:</strong> {applicantData?.transactionId}
                    </p>

                </div>

                <p className='text-gray-600 mb-6'>
                    Your scholarship application has been submitted.
                </p>
                <Link
                    to='/dashboard/my-applications'
                    className='inline-block bg-[#04264e] text-white font-semibold py-2 px-4 rounded transition duration-300'
                >
                    Go to My Applications
                </Link>
            </div>
        </div>
    );
};

export default PaymentSuccess;