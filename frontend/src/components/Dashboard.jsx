import React from "react";
import TransactionTable from "./TransactionTable";
import FraudChart from "./FraudChart";

function Dashboard({ transactions }) {   // ✅ receive as prop
  return (
    <div className="dashboard">
      <h1>Admin Dashboard - Fraud Detection</h1>
      <FraudChart transactions={transactions} />
      <TransactionTable transactions={transactions} />
    </div>
  );
}

export default Dashboard;

