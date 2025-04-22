import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

function FraudChart({ transactions }) {
  const fraudCount = transactions.filter(txn => txn.isFraud).length;
  const genuineCount = transactions.length - fraudCount;

  const data = [
    { name: "Fraud", count: fraudCount },
    { name: "Genuine", count: genuineCount },
  ];

  const COLORS = ["#FF4C4C", "#4CAF50"]; // Red for fraud, green for genuine

  return (
    <div className="chart-container" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", padding: "20px" }}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#333",
        }}
      >
        Fraud vs Genuine Transactions
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {/* Bar Chart */}
        <div style={{ flex: 1, minWidth: "300px", maxWidth: "600px" }}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count">
                {data.map((entry, index) => (
                  <Cell
                    key={`bar-cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div style={{ flex: 1, minWidth: "300px", maxWidth: "600px" }}>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="count"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`pie-cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default FraudChart;
