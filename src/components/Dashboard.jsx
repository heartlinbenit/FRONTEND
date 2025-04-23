// src/components/Dashboard.jsx
import React from "react";
import TransactionTable from "./TransactionTable";
import FraudChart from "./FraudChart";
import SummaryCards from "./SummaryCards";
import DownloadCSV from "./DownloadCSV";

function Dashboard({ transactions }) {
  return (
    <div className="dashboard">
      <h1 style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", display : "flex", justifyContent:"center",  color: "#333"}}>Dashboard - Fraud Detection</h1>
      <FraudChart transactions={transactions} />
      <TransactionTable transactions={transactions} />
      <SummaryCards transactions={transactions} />
      <DownloadCSV transactions={transactions} />
    </div>
  );
}

export default Dashboard;
