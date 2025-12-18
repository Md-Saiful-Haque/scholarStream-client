import React from 'react';
import { useNavigate } from 'react-router';


const SearchScholarshipButton = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/all-scholarships'); 
  };

  return (
    <button
      onClick={handleSearch}
      className="bg-[#04264e] text-white text-lg font-semibold px-8 py-3 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
    >
      Search Scholarship
    </button>
  );
};

export default SearchScholarshipButton;