import React from "react";

const Collaborations = () => {
  const opportunities = [
    {
      id: 1,
      title: "Group Exhibition Opportunity",
      description: "Collaborate with other artists for a gallery exhibition.",
    },
    {
      id: 2,
      title: "Curator-Led Project",
      description:
        "Work with a curator on an exclusive project for private collectors.",
    },
  ];

  return (
    <div className="bg-[#DDDBDE] p-6 shadow-lg rounded-lg border border-[#656E77]">
      <h2 className="text-2xl font-extrabold uppercase tracking-wide border-b-4 border-[#656E77] pb-2 mb-4 text-[#3B373B]">
        Collaborations & Opportunities
      </h2>

      <ul className="space-y-4">
        {opportunities.map((opportunity) => (
          <li
            key={opportunity.id}
            className="p-4 border border-[#656E77] bg-[#CAD4DF] rounded-lg"
          >
            <h3 className="text-lg font-bold text-[#3B373B]">
              {opportunity.title}
            </h3>
            <p className="text-[#656E77]">{opportunity.description}</p>
            <button className="mt-3 px-4 py-2 font-bold uppercase bg-[#3B373B] text-white rounded-lg hover:bg-[#656E77] transition">
              Express Interest
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Collaborations;
