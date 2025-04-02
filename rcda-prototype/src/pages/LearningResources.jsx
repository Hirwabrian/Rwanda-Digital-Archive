import React from "react";

const LearningResources = () => {
  const resources = [
    { id: 1, title: "How to Market Your Art", link: "#" },
    { id: 2, title: "Building an Art Portfolio", link: "#" },
  ];

  return (
    <div className="bg-[#DDDBDE] p-6 shadow-lg border border-[#656E77] rounded-lg">
      <h2 className="text-2xl font-bold uppercase tracking-wider text-[#3B373B] border-b-4 border-[#656E77] pb-3 mb-4">
        Learning Resources
      </h2>
      <ul>
        {resources.map((resource) => (
          <li key={resource.id} className="mb-2">
            <a
              href={resource.link}
              className="text-[#C83F5F] font-semibold hover:text-[#DF5587] underline transition"
            >
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LearningResources;
