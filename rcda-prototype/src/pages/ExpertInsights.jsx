import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const ExpertInsightsSimulation = () => {
  const [metric, setMetric] = useState("categories");
  const data = {
    categories: [
      { name: "Painting", value: 40 },
      { name: "Sculpture", value: 30 },
      { name: "Abstract", value: 20 },
      { name: "Photography", value: 10 },
    ],
    themes: [
      { name: "Nature", value: 25 },
      { name: "Urban", value: 15 },
      { name: "Portrait", value: 20 },
      { name: "Abstract", value: 40 },
    ],
  };
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Expert Insights Simulation</h2>
      <div className="mb-4">
        <select
          className="border p-2 rounded"
          value={metric}
          onChange={(e) => setMetric(e.target.value)}
        >
          <option value="categories">Most Popular Categories</option>
          <option value="themes">Emerging Themes</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data[metric]}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            fill="#8884d8"
          >
            {data[metric].map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpertInsightsSimulation;
