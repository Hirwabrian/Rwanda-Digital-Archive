import React, { useState } from "react";

const UploadArtworkForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    fileType: "Painting",
    files: [],
    description: "",
    categories: [],
  });

  const [previews, setPreviews] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const fileArray = Array.from(files);
      setFormData((prev) => ({
        ...prev,
        files: fileArray,
      }));

      // Generate previews
      const imagePreviews = fileArray.map((file) => URL.createObjectURL(file));
      setPreviews(imagePreviews);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleCategoryChange = (e) => {
    const selectedCategories = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFormData((prev) => ({
      ...prev,
      categories: selectedCategories,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="bg-[#DDDBDE] p-8 shadow-lg rounded-lg border border-[#3B373B]">
      <h2 className="text-3xl font-extrabold text-[#3B373B] border-b-4 border-[#3B373B] pb-2 mb-4 uppercase tracking-wide">
        Upload New Artwork
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title Input */}
        <input
          type="text"
          name="title"
          placeholder="Artwork Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-4 border-2 border-[#3B373B] rounded-lg bg-[#CAD4DF] text-[#656E77] placeholder-[#3B373B] focus:outline-none focus:ring-2 focus:ring-[#3B373B]"
        />

        {/* File Type Selection */}
        <select
          name="fileType"
          value={formData.fileType}
          onChange={handleChange}
          className="w-full p-4 border-2 border-[#3B373B] rounded-lg bg-[#CAD4DF] text-[#656E77] focus:outline-none focus:ring-2 focus:ring-[#3B373B]"
        >
          <option value="Painting">Painting</option>
          <option value="Digital Art">Digital Art</option>
          <option value="Photography">Photography</option>
          <option value="Illustration">Illustration</option>
          <option value="3D Model">3D Model</option>
        </select>

        {/* Drag & Drop or Click to Upload */}
        <label className="block w-full p-8 border-4 border-dashed border-[#3B373B] text-center rounded-lg bg-[#CAD4DF] text-[#656E77] cursor-pointer">
          <span>Drag & drop files here or click to upload</span>
          <input
            type="file"
            multiple
            name="files"
            onChange={handleChange}
            className="hidden"
          />
        </label>

        {/* Preview Images */}
        {previews.length > 0 && (
          <div className="grid grid-cols-3 gap-4 mt-4">
            {previews.map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Preview"
                className="w-full h-24 object-cover rounded-lg border-4 border-[#3B373B]"
              />
            ))}
          </div>
        )}

        {/* Description Box */}
        <textarea
          name="description"
          placeholder="Describe your artwork..."
          value={formData.description}
          onChange={handleChange}
          className="w-full p-4 border-2 border-[#3B373B] rounded-lg bg-[#CAD4DF] text-[#656E77] placeholder-[#3B373B] focus:outline-none focus:ring-2 focus:ring-[#3B373B]"
        ></textarea>

        {/* Category Tags */}
        <select
          multiple
          name="categories"
          onChange={handleCategoryChange}
          className="w-full p-4 border-2 border-[#3B373B] rounded-lg bg-[#CAD4DF] text-[#656E77] focus:outline-none focus:ring-2 focus:ring-[#3B373B]"
        >
          <option value="Abstract">Abstract</option>
          <option value="Surrealism">Surrealism</option>
          <option value="Realism">Realism</option>
          <option value="Impressionism">Impressionism</option>
          <option value="Minimalist">Minimalist</option>
          <option value="Fantasy">Fantasy</option>
        </select>

        {/* Upload Button */}
        <button
          type="submit"
          className="w-full px-6 py-3 font-bold text-[#DDDBDE] bg-[#3B373B] rounded-lg hover:bg-[#656E77] transition"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadArtworkForm;
