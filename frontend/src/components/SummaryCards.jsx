// src/components/SummaryCards.jsx
import React from "react";
import "./SummaryCards.css";

function SummaryCards({ transactions }) {
  const totalTransactions = transactions.length;
  const fraudCount = transactions.filter((txn) => txn.isFraud).length;
  const fraudPercentage = ((fraudCount / totalTransactions) * 100).toFixed(2);

  return (
    <div className="summary-cards">
      <div className="card total">
        <h3>Total Transactions</h3>
        <p>{totalTransactions}</p>
      </div>
      <div className="card fraud">
        <h3>Fraud Transactions</h3>
        <p>{fraudCount}</p>
      </div>
      <div className="card genuine">
        <h3>Genuine Percentage</h3>
        <p>{100 - fraudPercentage}%</p>
      </div>
    </div>
  );
}

export default SummaryCards;
