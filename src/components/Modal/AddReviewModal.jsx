import React, { useState } from 'react';

const AddReviewModal = ({ app, onClose }) => {
    console.log(app)
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");

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
                    <button className="btn btn-primary">
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