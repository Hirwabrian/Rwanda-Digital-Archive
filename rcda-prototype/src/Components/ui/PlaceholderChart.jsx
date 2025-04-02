import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { name: "Artwork A", Approved: 10, Rejected: 2 },
  { name: "Artwork B", Approved: 7, Rejected: 1 },
  { name: "Artwork C", Approved: 4, Rejected: 3 },
];

const PlaceholderChart = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Submission Overview
      </h3>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Approved" fill="#82ca9d" />
        <Bar dataKey="Rejected" fill="#ff4d4f" />
      </BarChart>
    </div>
  );
};

export default PlaceholderChart;
