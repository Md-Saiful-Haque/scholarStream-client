import React from 'react';

const DetailsModal = ({ app, onClose }) => {
    return (
        <div className="modal modal-open">
      <div className="modal-box">

        <h3 className="font-bold text-xl mb-3">Application Details</h3>

        <p><b>Scholarship:</b> {app.scholarshipName}</p>
        <p><b>University:</b> {app.universityName}</p>
        <p><b>Degree:</b> {app.degree}</p>
        <p><b>Subject:</b> {app.subjectCategory}</p>
        <p><b>Fees:</b> ${app.applicationFees}</p>
        <p><b>Status:</b> {app.applicationStatus}</p>
        <p><b>Payment:</b> {app.paymentStatus}</p>
        <p><b>Feedback:</b> {app.feedback || "-"}</p>
        <p><b>TransactionId:</b> {app.transactionId}</p>

        <div className="modal-action">
          <button className="btn btn-outline" onClick={onClose}>
            Close
          </button>
        </div>

      </div>
    </div>
    );
};

export default DetailsModal;