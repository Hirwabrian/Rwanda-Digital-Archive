import React, { useState } from "react";

const GalleryRepresentation = () => {
  const [availability, setAvailability] = useState(true);

  return (
    <div className="bg-[#DDDBDE] p-6 shadow-lg rounded-lg border border-[#656E77]">
      <h2 className="text-2xl font-extrabold uppercase tracking-wide border-b-4 border-[#656E77] pb-2 mb-4 text-[#3B373B]">
        Gallery Representation
      </h2>

      <p className="mb-4 text-lg text-[#3B373B]">
        Are you available for gallery representation?{" "}
        <span
          className={`font-bold ${
            availability ? "text-[#82ca9d]" : "text-[#ff6f61]"
          }`}
        >
          {availability ? "Yes" : "No"}
        </span>
      </p>

      <button
        onClick={() => setAvailability((prev) => !prev)}
        className={`px-5 py-3 font-bold uppercase text-white rounded-lg transition
          ${
            availability
              ? "bg-[#ff6f61] hover:bg-[#c83f5f]"
              : "bg-[#82ca9d] hover:bg-[#4a9f67]"
          }`}
      >
        {availability ? "Mark as Unavailable" : "Mark as Available"}
      </button>
    </div>
  );
};

export default GalleryRepresentation;
