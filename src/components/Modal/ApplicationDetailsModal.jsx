import React from 'react';

const ApplicationDetailsModal = ({ application, onClose }) => {
    return (
        <div className="modal modal-open">
      <div className="modal-box max-w-xl">

        <h3 className="font-bold text-xl mb-3">
          Application Details
        </h3>

        <h2 className='text-lg'> <strong>Name:</strong> {application.userName}</h2>
        <h2 className='text-lg'> <strong>Email:</strong> {application.userEmail}</h2>
        <h2 className='text-lg'> <strong>University:</strong> {application.universityName}</h2>
        <h2 className='text-lg'> <strong>Scholarship:</strong> {application.scholarshipName}</h2>
        <h2 className='text-lg'> <strong>Category:</strong> {application.scholarshipCategory}</h2>
        <h2 className='text-lg'> <strong>Degree:</strong> {application.degree}</h2>
        <h2 className='text-lg'> <strong>Status:</strong> {application.applicationStatus}</h2>
        <h2 className='text-lg'> <strong>Payment:</strong> {application.paymentStatus}</h2>
        <h2 className='text-lg'> <strong>Feedback:</strong> {application.feedback || "-"}</h2>

        <div className="modal-action">
          <button
            onClick={onClose}
            className="btn"
          >
            Close
          </button>
        </div>

      </div>
    </div>
    );
};

export default ApplicationDetailsModal;