import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const PerformanceAnalytics = () => {
  // Example analytics data
  const data = [
    { category: "Abstract", approved: 10, rejected: 2 },
    { category: "Portrait", approved: 15, rejected: 5 },
    { category: "Landscape", approved: 8, rejected: 1 },
  ];

  return (
    <div className="bg-[#CAD4DF] p-6 shadow-lg rounded-lg border border-[#656E77]">
      <h2 className="text-2xl font-extrabold uppercase tracking-wide border-b-4 border-[#656E77] pb-2 mb-4 text-[#3B373B]">
        Performance Analytics
      </h2>
      <BarChart width={400} height={300} data={data} className="mx-auto">
        <CartesianGrid stroke="#656E77" strokeDasharray="4 4" />
        <XAxis dataKey="category" stroke="#3B373B" />
        <YAxis stroke="#3B373B" />
        <Tooltip
          contentStyle={{
            backgroundColor: "#DDDBDE",
            borderColor: "#656E77",
            color: "#3B373B",
          }}
          cursor={{ fill: "#CAD4DF" }}
        />
        <Bar dataKey="approved" fill="#3B373B" barSize={30} />
        <Bar dataKey="rejected" fill="#DF5587" barSize={30} />
      </BarChart>
    </div>
  );
};

export default PerformanceAnalytics;
