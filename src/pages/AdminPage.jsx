import React from "react";
import UserTransactionForm from "../components/UserTransactionForm";

function AdminPage({ transactions, addTransaction }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#fff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#333",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          color: "#333",
          marginBottom: "30px",
          fontWeight: "600",
          letterSpacing: "1px",
        }}
      >
        Credit Card Payment Gateway
      </h1>

      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          backgroundColor: "#f9f9f9",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        
        <UserTransactionForm addTransaction={addTransaction} />
      </div>
    </div>
  );
}

export default AdminPage;
