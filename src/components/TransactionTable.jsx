import React, { useState } from "react";

function TransactionTable({ transactions }) {
  const [search, setSearch] = useState("");

  // Filter transactions based on the search query
  const filteredTransactions = transactions.filter((txn) =>
    txn.id.toString().includes(search)
  );

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: "#333", padding :"20px"}}>
      <input
        type="text"
        placeholder="Search by Transaction ID"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          marginBottom: "20px",
          padding: "8px",
          width: "300px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ddd",
        }}
      />
      <table style={{ width: "100%", borderCollapse: "collapse", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}>
        <thead>
          <tr style={{ backgroundColor: "#2196f3", color: "white" }}>
            <th style={{ padding: "12px", textAlign: "left" }}>ID</th>
            <th style={{ padding: "12px", textAlign: "left" }}>Amount</th>
            <th style={{ padding: "12px", textAlign: "left" }}>Date</th>
            <th style={{ padding: "12px", textAlign: "left" }}>Fraud?</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((txn) => (
            <tr key={txn.id} style={{ backgroundColor: "#f9f9f9" }}>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>{txn.id}</td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>${txn.amount}</td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>{txn.date}</td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                {txn.isFraud ? "Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
