import React from "react";

const Carousel3D = ({ images }) => {
  return (
    <div className="relative w-full h-[50vh] my-8">
      <div
        className="absolute top-1/2 left-1/2 w-48 h-72"
        style={{
          transformStyle: "preserve-3d",
          transform: "translate(-50%, -50%) perspective(1000px)",
          animation: "autoRun 30s linear infinite",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 rounded-lg overflow-hidden shadow-xl border-2 border-[#FAEBD7]"
            style={{
              transform: `rotateY(${
                index * (360 / images.length)
              }deg) translateZ(400px)`,
              transformStyle: "preserve-3d",
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Global Keyframes */}
      <style>
        {`
          @keyframes autoRun {
            from {
              transform: translate(-50%, -50%) perspective(1000px) rotateY(0deg);
            }
            to {
              transform: translate(-50%, -50%) perspective(1000px) rotateY(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Carousel3D;
