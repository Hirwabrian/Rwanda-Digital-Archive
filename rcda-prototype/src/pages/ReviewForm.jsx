// src/components/ReviewForm.js
import React, { useState } from "react";

const ReviewForm = ({ submission, onSubmit }) => {
  const [ratings, setRatings] = useState({
    technique: 0,
    originality: 0,
    concept: 0,
    execution: 0,
  });
  const [feedback, setFeedback] = useState("");

  const handleRatingChange = (category, value) => {
    setRatings({ ...ratings, [category]: value });
  };

  const handleSubmit = (status) => {
    onSubmit({
      submissionId: submission.id,
      ratings,
      feedback,
      status, // "approved", "revision_requested", or "rejected"
    });
  };

  return (
    <div className="p-4 bg-[#CAD4DF] border border-[#3B373B] rounded-md">
      <h3 className="text-lg font-bold mb-2">Review Artwork</h3>

      {/* Rating Inputs */}
      {["technique", "originality", "concept", "execution"].map((category) => (
        <div key={category} className="mb-3">
          <label className="block font-semibold capitalize">{category}</label>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className={`text-xl mx-1 ${
                  ratings[category] >= star ? "text-[#3B373B]" : "text-gray-400"
                }`}
                onClick={() => handleRatingChange(category, star)}
              >
                ★
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* Feedback Input */}
      <textarea
        className="w-full p-2 border border-[#3B373B] rounded-md mt-2"
        rows="3"
        placeholder="Leave feedback..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />

      {/* Action Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => handleSubmit("revision_requested")}
          className="px-4 py-2 border border-[#3B373B] hover:bg-[#DDDBDE] uppercase"
        >
          Request Revision
        </button>
        <button
          onClick={() => handleSubmit("rejected")}
          className="px-4 py-2 border border-[#3B373B] hover:bg-[#DDDBDE] uppercase"
        >
          Reject
        </button>
        <button
          onClick={() => handleSubmit("approved")}
          className="px-4 py-2 border border-[#3B373B] bg-[#3B373B] text-[#DDDBDE] hover:bg-[#656E77] uppercase"
        >
          Approve
        </button>
      </div>
    </div>
  );
};

export default ReviewForm;
