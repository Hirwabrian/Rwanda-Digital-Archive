import React from "react";
import { useNavigate } from "react-router-dom";

const ExpertHomepage = () => {
  const navigate = useNavigate();

  const expertName = "Jane Doe"; // Replace with the logged-in expert's name

  const pendingSubmissions = [
    {
      id: 1,
      title: "Abstract Painting",
      artist: "John Smith",
      date: "2025-03-20",
    },
    {
      id: 2,
      title: "Rwandan Sculpture",
      artist: "Alice Brown",
      date: "2025-03-22",
    },
  ];

  const authenticatedArtworks = [
    {
      id: 1,
      title: "Impressionist Landscape",
      artist: "Sarah Lee",
      date: "2025-02-15",
    },
    {
      id: 2,
      title: "Cubist Portrait",
      artist: "Michael Tan",
      date: "2025-02-18",
    },
  ];

  return (
    <div className="min-h-screen bg-[#DDDBDE] text-[#3B373B] font-mono">
      {/* Header */}
      <header className="bg-[#3B373B] text-[#DDDBDE] shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold uppercase tracking-wide">
          Art Vault
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#home"
                className="hover:text-[#CAD4DF] transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#pending"
                className="hover:text-[#CAD4DF] transition-colors"
              >
                Pending Submissions
              </a>
            </li>
            <li>
              <a
                href="#contributions"
                className="hover:text-[#CAD4DF] transition-colors"
              >
                My Contributions
              </a>
            </li>
            <li>
              <button
                onClick={() => navigate("/expert/dashboard")}
                className="hover:text-[#CAD4DF] transition-colors"
              >
                Dashboard
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-[50vh] flex flex-col justify-center items-center text-center bg-[#656E77] text-[#DDDBDE]">
        <h2 className="text-4xl font-extrabold mb-4">Welcome, {expertName}!</h2>
        <p className="text-lg mb-6">
          Help preserve cultural heritage with your expertise.
        </p>
        <button
          onClick={() => navigate("/expert/dashboard")}
          className="px-6 py-3 border border-[#DDDBDE] text-[#DDDBDE] hover:bg-[#CAD4DF] hover:text-[#3B373B] transition-all uppercase"
        >
          Go to Dashboard
        </button>
      </section>

      {/* Pending Submissions */}
      <section id="pending" className="py-12 px-6">
        <h3 className="text-3xl font-bold uppercase mb-6">
          Pending Submissions
        </h3>
        <table className="min-w-full bg-[#DDDBDE] shadow-md rounded-lg overflow-hidden">
          <thead className="bg-[#CAD4DF]">
            <tr className="text-left">
              <th className="p-4">Title</th>
              <th className="p-4">Artist</th>
              <th className="p-4">Submission Date</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingSubmissions.map((submission) => (
              <tr key={submission.id} className="border-t border-[#656E77]">
                <td className="p-4">{submission.title}</td>
                <td className="p-4">{submission.artist}</td>
                <td className="p-4">{submission.date}</td>
                <td className="p-4 flex justify-center space-x-4">
                  <button className="px-4 py-2 border border-[#3B373B] text-[#3B373B] hover:bg-[#CAD4DF] transition-all">
                    Approve
                  </button>
                  <button className="px-4 py-2 border border-[#3B373B] text-[#3B373B] hover:bg-[#CAD4DF] transition-all">
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Authenticated Artworks */}
      <section id="contributions" className="py-12 px-6 bg-[#CAD4DF]">
        <h3 className="text-3xl font-bold uppercase mb-6">
          Authenticated Artworks
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {authenticatedArtworks.map((artwork) => (
            <div
              key={artwork.id}
              className="bg-[#DDDBDE] shadow-md overflow-hidden p-4 border border-[#3B373B]"
            >
              <img
                src="/images/Homepage/homepage5.jpg"
                alt={artwork.title}
                className="w-full h-48 object-cover"
              />
              <h4 className="text-xl font-semibold mt-4">{artwork.title}</h4>
              <p className="text-sm">By {artwork.artist}</p>
              <p className="text-xs text-[#656E77]">
                Approved on: {artwork.date}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3B373B] text-[#DDDBDE] py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Art Vault. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ExpertHomepage;
