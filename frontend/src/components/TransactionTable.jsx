import React, { useState } from "react";

function TransactionTable({ transactions }) {
  const [search, setSearch] = useState("");

  const filteredTransactions = transactions.filter((txn) =>
    txn.id.toString().includes(search)
  );
  

  return (
    <div>
      <input
        type="text"
        placeholder="Search by Transaction ID"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "15px", padding: "8px", width: "50%" }}
      />
    <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
  <thead>
    <tr>
      <th>ID</th>
      <th>Amount</th>
      <th>Status</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    {filteredTransactions.map((txn) => (
      <tr key={txn.id}>
        <td>{txn.id}</td>
        <td>{txn.amount}</td>
        <td>{txn.isFraud ? "Fraud" : "Genuine"}</td>
        <td>{txn.date}</td>
      </tr>
    ))}
  </tbody>
</table>


    </div>
  );
}

export default TransactionTable;
