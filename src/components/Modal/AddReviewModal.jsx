import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const AddReviewModal = ({ app, onClose }) => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");

    const handleSubmitReview = async () => {
        const reviewInfo = {
            scholarshipId: app?.scholarshipId,
            universityName: app?.universityName,
            userName: app?.userName,
            userEmail: app?.userEmail,
            userImage: user?.photoURL,
            ratingPoint: rating,
            reviewComment: comment,
        }

        const res = await axiosSecure.post('/add-reviews', reviewInfo)
        if (res.data.insertedId) {
            toast('Review Submitted Successfully')
            onClose()
        }
    }

    return (
        <div className="modal modal-open">
            <div className="modal-box">

                <h3 className="font-bold text-xl mb-3">Add Review</h3>

                <p><b>Scholarship:</b> {app.scholarshipName}</p>
                <p><b>University:</b> {app.universityName}</p>

                <div className="mt-4">
                    <label className="label">Rating (1-5)</label>
                    <input
                        type="number"
                        min="1"
                        max="5"
                        value={rating}
                        onChange={e => setRating(e.target.value)}
                        className="input input-bordered w-full"
                    />

                    <label className="label mt-3">Comment</label>
                    <textarea
                        className="textarea textarea-bordered w-full"
                        placeholder="Write your experience..."
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                    />
                </div>

                <div className="modal-action">
                    <button onClick={handleSubmitReview} className="btn bg-[#04264e] text-white">
                        Submit Review
                    </button>

                    <button className="btn btn-outline" onClick={onClose}>
                        Close
                    </button>
                </div>

            </div>
        </div>
    );
};

export default AddReviewModal;