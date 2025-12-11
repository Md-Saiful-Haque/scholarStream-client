import React, { useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const FeedbackModal = ({ feedbackId, refetch, onClose }) => {
    const axiosSecure = useAxiosSecure()
    const [feedback, setFeedback] = useState("")

    const handleSubmit = async () => {
        const res = await axiosSecure.patch(`/applications/feedback/${feedbackId}`,{ feedback })

        refetch()
        onClose()
        return res.data
    }

    return (
        <div className="modal modal-open">
            <div className="modal-box">

                <h3 className="text-xl mb-3">
                    Give Feedback
                </h3>

                <textarea
                    className="textarea textarea-bordered w-full"
                    placeholder="Write feedback..."
                    value={feedback}
                    onChange={e => setFeedback(e.target.value)}
                />

                <div className="modal-action">

                    <button
                        onClick={handleSubmit}
                        className="btn bg-[#04264e] text-white"
                    >
                        Submit
                    </button>

                    <button
                        onClick={onClose}
                        className="btn"
                    >
                        Cancel
                    </button>

                </div>

            </div>
        </div>
    );
};

export default FeedbackModal;