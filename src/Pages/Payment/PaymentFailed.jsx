import { FaTimesCircle } from "react-icons/fa";
import { Link, useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import LoadingSpinner from "../LoadingSpinner";

const PaymentFailed = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure.get(`/payment-failed/${id}`)
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
  }, [id, axiosSecure]);

  if (loading) {
    return <LoadingSpinner />
  }

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl text-center">
        <div className="card-body">
          <div className="flex justify-center">
            <FaTimesCircle className="text-red-500 text-6xl mb-4" />
          </div>

          <h2 className="text-2xl font-bold text-red-500">
            Payment Failed
          </h2>

          <p className="mt-2 text-gray-600">
            Unfortunately, your payment could not be processed.
          </p>

          
            <p className="mt-3">
              <span className="font-semibold">Scholarship:</span>{" "}
              {data?.scholarshipName}
            </p>
         

          <div className="card-actions justify-center mt-6">
            <Link to="/dashboard/my-applications">
              <button className="btn bg-[#04264e] text-white">
                Return to Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
