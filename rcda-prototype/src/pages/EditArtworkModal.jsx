import React, { useState } from "react";

const EditArtworkModal = ({ artwork, onClose }) => {
  const [title, setTitle] = useState(artwork.title);
  const [image, setImage] = useState(artwork.image);

  const handleSave = () => {
    console.log("Updated Artwork:", { title, image });
    onClose(); // Close the modal after saving
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-[#DDDBDE] p-6 border-4 border-[#656E77] shadow-2xl w-96 rounded-lg">
        <h2 className="text-2xl font-bold text-[#3B373B] uppercase mb-4 border-b-4 border-[#656E77] pb-2">
          Edit Artwork
        </h2>

        {/* Title Input */}
        <label className="block mb-3">
          <span className="text-[#3B373B] font-semibold uppercase text-sm">
            Title
          </span>
          <input
            type="text"
            className="w-full px-3 py-2 border-2 border-[#656E77] rounded-lg bg-[#CAD4DF] text-[#3B373B] focus:outline-none focus:border-[#3B373B]"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        {/* Image Upload */}
        <label className="block mb-3">
          <span className="text-[#3B373B] font-semibold uppercase text-sm">
            Artwork Image
          </span>
          <input
            type="file"
            className="w-full px-3 py-2 border-2 border-[#656E77] rounded-lg bg-[#CAD4DF] text-[#3B373B] focus:outline-none"
            accept="image/*"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
          />
        </label>

        {/* Image Preview */}
        {image && (
          <img
            src={image}
            alt="Preview"
            className="w-full h-40 object-cover mt-3 border-2 border-[#656E77] rounded"
          />
        )}

        {/* Buttons */}
        <div className="flex justify-end space-x-3 mt-4">
          <button
            className="px-4 py-2 border-2 border-[#656E77] bg-[#DDDBDE] text-[#3B373B] font-semibold uppercase rounded-lg hover:bg-[#CAD4DF] transition"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 border-2 border-[#C83F5F] bg-[#C83F5F] text-white font-semibold uppercase rounded-lg hover:bg-[#DF5587] transition"
            onClick={handleSave}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditArtworkModal;
