import React, { useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const MyReviewsEditModal = ({ myReviews, onClose, refetch }) => {
    const axiosSecure = useAxiosSecure()
    const [rating, setRating] = useState(myReviews?.ratingPoint);
    const [comment, setComment] = useState(myReviews?.reviewComment);

    const handleReviewUpdate = async () => {
        const updatedReview = {
            ratingPoint: rating,
            reviewComment: comment,
        };
        await axiosSecure.patch(`/update-reviews/${myReviews._id}`, updatedReview)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: 'Review has been updated.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                onClose()
        })
    };

    return (
        <div className="modal modal-open">
            <div className="modal-box">

                <h3 className="font-bold text-xl mb-3">Add Review</h3>

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
                    <button onClick={handleReviewUpdate}
                        className="btn bg-[#04264e] text-white">
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

export default MyReviewsEditModal;