import React, { useState } from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel3D from "../Components/Slideshow";
import RegistrationForm from "../Components/RegistrationForm";
import LoginForm from "../Components/LoginForm";

Modal.setAppElement("#root");

const LandingPage = () => {
  const [authView, setAuthView] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setAuthView(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setAuthView(null);
  };

  const culturalImages = [
    { src: "/images/landing page/landing1.jpg", alt: "Imigongo Art" },
    { src: "/images/landing page/landing2.jpg", alt: "Traditional Basket" },
    { src: "/images/landing page/landing3.jpeg", alt: "Rwandan Dance" },
    { src: "/images/landing page/landing4.jpg", alt: "Historic Artifact" },
    { src: "/images/landing page/landing3.webp", alt: "Cultural Performance" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#DDDBDE] to-[#CAD4DF] text-[#3B373B]">
      {/* Geometric Brutalist Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(59,55,59,0.1) 20%,rgba(101,110,119,0.3) 80%)]"></div>

      {/* 3D Carousel */}
      <Carousel3D images={culturalImages} />

      {/* Main Content */}
      {!authView && (
        <div className="text-center z-10 mt-8">
          <h1 className="text-6xl font-extrabold mb-4 tracking-wide uppercase">
            The Art Vault
          </h1>
          <p className="text-lg mb-6 text-[#656E77] font-mono">
            Preserving Rwanda's cultural legacy in digital form
          </p>
          <button
            onClick={openModal}
            className="px-10 py-3 bg-[#3B373B] text-[#DDDBDE] font-bold uppercase tracking-wide rounded-md hover:bg-[#656E77] transition-all"
          >
            Begin
          </button>
        </div>
      )}

      {/* Modal */}
      <Modal
        isOpen={isModalOpen || authView !== null}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="modal-content mx-auto p-8 max-w-xl bg-[#3B373B] text-[#DDDBDE] shadow-lg rounded-lg z-50 border border-[#656E77]"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40"
      >
        {authView === null ? (
          <Slider {...sliderSettings}>
            {/* Slide 1: Artist */}
            <div className="text-center">
              <img
                src="/images/landing page/team.png"
                className="mx-auto w-32 h-32 object-cover rounded-lg shadow-lg mb-4 border-4 border-[#CAD4DF]"
                alt="Artist"
              />
              <h2 className="text-2xl font-bold mb-2 uppercase">General</h2>
              <p className="text-[#CAD4DF]">
                Experince the beauty of Rwandan art and culture
              </p>
            </div>

            {/* Slide 2: Artist */}
            <div className="text-center">
              <img
                src="/images/landing page/painting.png"
                className="mx-auto w-32 h-32 object-cover rounded-lg shadow-lg mb-4 border-4 border-[#CAD4DF]"
                alt="Artist"
              />
              <h2 className="text-2xl font-bold mb-2 uppercase">Artist</h2>
              <p className="text-[#CAD4DF]">
                Showcase your work in the digital archive
              </p>
            </div>

            {/* Slide 2: Expert */}
            <div className="text-center">
              <img
                src="/images/landing page/badge.png"
                className="mx-auto w-32 h-32 object-cover rounded-lg shadow-lg mb-4 border-4 border-[#CAD4DF]"
                alt="Explorer"
              />
              <h2 className="text-2xl font-bold mb-2 uppercase">Expert</h2>
              <p className="text-[#CAD4DF]">Discover Rwandan art and culture</p>
            </div>

            {/* Slide 3: Join */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 uppercase">Join Us</h2>
              <div className="flex justify-center gap-4">
                <button
                  className="px-6 py-3 border border-[#656E77] text-[#DDDBDE] uppercase tracking-wide rounded-md hover:bg-[#656E77] transition-all"
                  onClick={() => setAuthView("signup")}
                >
                  Sign Up
                </button>
                <button
                  className="px-6 py-3 border border-[#CAD4DF] text-[#CAD4DF] uppercase tracking-wide rounded-md hover:bg-[#656E77] transition-all"
                  onClick={() => setAuthView("login")}
                >
                  Log In
                </button>
              </div>
            </div>
          </Slider>
        ) : authView === "signup" ? (
          <RegistrationForm />
        ) : (
          <LoginForm />
        )}
      </Modal>
    </div>
  );
};

export default LandingPage;
