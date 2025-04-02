import React, { useState } from "react";
import EditArtworkModal from "./EditArtworkModal";

const SubmittedArtworks = () => {
  const [artworks, setArtworks] = useState([
    {
      id: 1,
      title: "Abstract Landscape",
      image: "/path/to/artwork1.jpg",
      status: "Approved",
    },
    {
      id: 2,
      title: "Surreal Dreams",
      image: "/path/to/artwork2.jpg",
      status: "Pending",
    },
  ]);
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const handleEdit = (artwork) => {
    setSelectedArtwork(artwork);
  };

  const handleCloseModal = () => {
    setSelectedArtwork(null);
  };

  return (
    <div className="bg-[#DDDBDE] p-6 shadow-lg rounded-lg border border-[#656E77]">
      <h2 className="text-2xl font-extrabold uppercase tracking-wide border-b-4 border-[#656E77] pb-2 mb-4 text-[#3B373B]">
        Submitted Artworks
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {artworks.map((artwork) => (
          <div
            key={artwork.id}
            className="border border-[#656E77] bg-[#CAD4DF] p-4 rounded-lg shadow-md transition hover:shadow-lg"
          >
            <img
              src={"/images/landing page/landing3.jpeg"}
              alt={artwork.title}
              className="w-full h-40 object-cover mb-2 border border-[#3B373B] rounded"
            />
            <h3 className="text-lg font-bold text-[#3B373B]">
              {artwork.title}
            </h3>
            <p className="text-[#656E77] font-semibold">
              Status:{" "}
              <span
                className={
                  artwork.status === "Approved"
                    ? "text-[#82ca9d]"
                    : "text-[#DF5587]"
                }
              >
                {artwork.status}
              </span>
            </p>
            <button
              onClick={() => handleEdit(artwork)}
              className="w-full mt-3 px-4 py-2 font-bold uppercase text-white bg-[#3B373B] rounded hover:bg-[#656E77] transition"
            >
              Edit
            </button>
          </div>
        ))}
      </div>

      {selectedArtwork && (
        <EditArtworkModal
          artwork={selectedArtwork}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default SubmittedArtworks;
