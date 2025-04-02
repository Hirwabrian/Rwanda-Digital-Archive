import React from "react";
import { useNavigate } from "react-router-dom";

const ArtistHomepage = () => {
  const navigate = useNavigate();
  const artistName = "John Doe"; // Replace with actual artist's name

  return (
    <div className="min-h-screen bg-[#DDDBDE] text-[#3B373B]">
      {/* Header */}
      <header className="bg-[#3B373B] p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Art Vault</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-white hover:text-[#CAD4DF]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#CAD4DF]">
                My Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#CAD4DF]">
                Notifications
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#CAD4DF]">
                Account
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex flex-col justify-center items-center text-center bg-[#CAD4DF]">
        <h2 className="text-4xl font-extrabold text-[#3B373B] mb-4">
          Welcome, {artistName}!
        </h2>
        <p className="text-lg text-[#656E77] mb-6">
          Showcase your creativity to the world.
        </p>
        <button
          onClick={() => navigate("/artist/dashboard")}
          className="px-6 py-3 bg-[#3B373B] text-white font-medium rounded-md hover:bg-[#656E77] transition-all"
        >
          Go to Dashboard
        </button>
      </section>

      {/* Portfolio Dashboard */}
      <section className="py-12 px-6">
        <h3 className="text-3xl font-bold text-[#3B373B] mb-6">My Portfolio</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((art) => (
            <div
              key={art}
              className="bg-[#CAD4DF] border-2 border-[#656E77] p-4"
            >
              <img
                src={"/images/Homepage/homepage4.jpg"} // Replace with real image URLs
                alt="Artwork"
                className="w-full h-48 object-cover border-2 border-[#656E77]"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-[#3B373B] mb-2">
                  Artwork Title {art}
                </h4>
                <p className="text-[#656E77] mb-4">Views: 150 | Likes: 30</p>
                <div className="flex space-x-4">
                  <button className="px-4 py-2 bg-[#3B373B] text-white rounded-md hover:bg-[#656E77] transition-all">
                    Edit
                  </button>
                  <button className="px-4 py-2 bg-[#B46543] text-white rounded-md hover:bg-[#C83F5F] transition-all">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Notifications */}
      <section className="py-12 px-6 bg-[#DDDBDE]">
        <h3 className="text-3xl font-bold text-[#3B373B] mb-6">
          Notifications
        </h3>
        <ul className="space-y-4">
          <li className="p-4 bg-[#CAD4DF] border-2 border-[#656E77]">
            Collaboration request from{" "}
            <span className="font-bold">Gallery X</span>.
          </li>
          <li className="p-4 bg-[#CAD4DF] border-2 border-[#656E77]">
            Feedback received for{" "}
            <span className="font-bold">Artwork Title 3</span>.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ArtistHomepage;
