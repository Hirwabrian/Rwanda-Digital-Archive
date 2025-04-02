import React, { useState } from "react";

const ViewArtworkModal = ({ isOpen, submission, onClose, onSubmitReview }) => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [showDetails, setShowDetails] = useState(false); // For collapsible details

  if (!isOpen || !submission) return null;

  return (
    <div className="fixed inset-0 bg-[#3B373B] bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-[#DDDBDE] border-4 border-[#3B373B] p-6 max-w-lg w-full shadow-xl relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-[#3B373B] text-xl font-bold hover:text-[#656E77] transition"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Artwork Title */}
        <h2 className="text-2xl font-extrabold text-[#3B373B] border-b-4 border-[#3B373B] pb-2 mb-4 uppercase text-center">
          {submission.title}
        </h2>

        {/* Artwork Image */}
        <div className="flex justify-center mb-4">
          <img
            src={"/images/Homepage/homepage4.jpg"}
            alt={submission.title}
            className="w-48 h-48 object-cover border-4 border-[#3B373B] cursor-pointer transition-transform hover:scale-105"
            onClick={() => window.open(submission.image, "_blank")}
          />
        </div>

        {/* Collapsible Metadata Section */}
        <div className="text-[#3B373B] text-sm mb-4">
          <button
            className="text-[#656E77] text-xs uppercase font-bold underline cursor-pointer"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Hide Details" : "View Details"}
          </button>
          {showDetails && (
            <div className="mt-2 border-2 border-[#3B373B] p-2">
              <p>
                <strong>Artist:</strong> {submission.artist}
              </p>
              <p>
                <strong>Category:</strong> {submission.category}
              </p>
              <p>
                <strong>Medium:</strong> {submission.medium}
              </p>
              <p>
                <strong>Dimensions:</strong> {submission.dimensions}
              </p>
            </div>
          )}
        </div>

        {/* Feedback & Rating Section */}
        <div className="p-2 border-2 border-[#3B373B] bg-[#CAD4DF] mb-4">
          <textarea
            className="w-full p-3 border-none bg-[#CAD4DF] text-[#3B373B] placeholder-[#656E77] focus:outline-none"
            placeholder="Leave feedback..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>

        {/* Rating (1-5 stars) */}
        <div className="flex justify-center mb-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              className={`cursor-pointer text-3xl ${
                num <= rating ? "text-[#656E77]" : "text-[#DDDBDE]"
              }`}
              onClick={() => setRating(num)}
            >
              ★
            </span>
          ))}
        </div>

        {/* Submit Review Button */}
        <button
          className="w-full px-6 py-3 font-bold text-[#DDDBDE] bg-[#3B373B] uppercase hover:bg-[#656E77] transition"
          onClick={() => {
            onSubmitReview({
              submissionId: submission.id,
              feedback,
              rating,
              status: "Reviewed",
            });
            setFeedback("");
            setRating(0);
          }}
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default ViewArtworkModal;
