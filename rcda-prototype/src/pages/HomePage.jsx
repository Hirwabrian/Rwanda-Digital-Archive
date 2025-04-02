import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#DDDBDE] to-[#CAD4DF] text-[#3B373B]">
      {/* Header */}
      <header className="bg-[#3B373B] shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#DDDBDE]">Art Vault</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#"
                className="text-[#CAD4DF] hover:text-[#656E77] transition-all"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#CAD4DF] hover:text-[#656E77] transition-all"
              >
                Explore Art
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#CAD4DF] hover:text-[#656E77] transition-all"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#CAD4DF] hover:text-[#656E77] transition-all"
              >
                Account
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col justify-center items-center text-center bg-[#656E77] text-[#DDDBDE]">
        <h2 className="text-4xl font-extrabold mb-4 tracking-wide">
          Preserving Creativity. Inspiring Generations.
        </h2>
        <p className="text-lg mb-6">
          Explore a collection of timeless masterpieces.
        </p>
        <button className="px-8 py-3 bg-[#3B373B] text-[#DDDBDE] font-medium uppercase tracking-wider rounded-md hover:bg-[#656E77] transition-all">
          Explore Now
        </button>
      </section>

      {/* Featured Artworks */}
      <section className="py-12 px-6">
        <h3 className="text-3xl font-bold text-[#3B373B] mb-6 text-center">
          Featured Artworks
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Artwork Cards */}
          {[1, 2, 3, 4, 5, 6].map((art) => (
            <div
              key={art}
              className="bg-[#DDDBDE] rounded-lg shadow-lg overflow-hidden border border-[#656E77]"
            >
              <img
                src={"/images/Homepage/homepage1.jpg"} // Replace with real image URLs
                alt="Artwork"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-[#3B373B] mb-2">
                  Artwork Title {art}
                </h4>
                <p className="text-[#656E77] mb-4">By Artist Name</p>
                <button className="px-4 py-2 bg-[#3B373B] text-[#DDDBDE] rounded-md hover:bg-[#656E77] transition-all">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3B373B] text-[#DDDBDE] py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Art Vault. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-[#CAD4DF]">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-[#CAD4DF]">
              Contact Us
            </a>
            <a href="#" className="hover:text-[#CAD4DF]">
              Social Media
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
