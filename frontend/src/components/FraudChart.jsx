import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

function FraudChart({ transactions }) {
  const fraudCount = transactions.filter((txn) => txn.isFraud).length;
  const genuineCount = transactions.length - fraudCount;

  const data = [
    { name: "Fraud", count: fraudCount },
    { name: "Genuine", count: genuineCount },
  ];

  const COLORS = ["#FF4C4C", "#4CAF50"]; // Red for Fraud, Green for Genuine

  return (
    <div className="chart-container">
      <h2>Fraud vs Genuine Transactions</h2>

      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        <ResponsiveContainer width="45%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="45%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="count"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default FraudChart;
