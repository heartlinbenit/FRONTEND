// src/components/DownloadCSV.jsx
import React from "react";
import { saveAs } from "file-saver";
import Papa from "papaparse";

function DownloadCSV({ transactions }) {
  const downloadFile = () => {
    const csv = Papa.unparse(
      transactions.map((txn) => ({
        ID: txn.id,
        Amount: txn.amount,
        Status: txn.isFraud ? "Fraud" : "Genuine",
        Date: txn.date,
      }))
    );

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "transactions_report.csv");
  };

  return (
    <button
      onClick={downloadFile}
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        margin: "10px",
        padding: "10px 20px",
        backgroundColor: "#2196f3",
        color: "white",
        border: "none",
        borderRadius: "6px",
      }}
    >
      Download Report
    </button>
  );
}

export default DownloadCSV;
