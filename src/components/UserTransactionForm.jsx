import React, { useState } from "react";

function UserTransactionForm({ addTransaction }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    amount: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }
  
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const currentTime = new Date().toISOString();
        const transactionData = {
          ...formData,
          location: `Lat: ${position.coords.latitude}, Lon: ${position.coords.longitude}`,
          time: currentTime,
        };
  
        console.log('Transaction Submitted:', transactionData);
        alert("Transaction submitted!");
        // TODO: Send transactionData to backend
      },
      (error) => {
        console.error("Error getting location", error);
        alert("Could not retrieve location");
      }
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
        maxWidth: "500px",
        margin: "30px auto",
      }}
    >

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "100%",
        }}
      >
        <label
          style={{
            display: "flex",
            alignItems : "flex-start",
            flexDirection: "column",
            color: "#555",
            fontSize: "1rem",
          }}
        >
          Name
          <input
            type="text"
            name="name"
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              marginTop: "5px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              outline: "none",
              fontSize: "1rem",
              width: "100%", // Make input take full width
            }}
          />
        </label>

        <label
          style={{
            display: "flex",
            alignItems : "flex-start",
            flexDirection: "column",
            color: "#555",
            fontSize: "1rem",
          }}
        >
          Email
          <input
            type="email"
            name="email"
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              marginTop: "5px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              outline: "none",
              fontSize: "1rem",
              width: "100%", // Make input take full width
            }}
          />
        </label>

        <label
          style={{
            display: "flex",
            alignItems : "flex-start",
            flexDirection: "column",
            color: "#555",
            fontSize: "1rem",
          }}
        >
          Card Number
          <input
            type="password"
            name="cardNumber"
            onChange={handleChange}
            required
            maxLength="16"
            placeholder="**** **** **** 1234"
            style={{
              padding: "10px",
              marginTop: "5px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              outline: "none",
              fontSize: "1rem",
              width: "100%", // Make input take full width
            }}
          />
        </label>

        <label
          style={{
            display: "flex",
            alignItems : "flex-start",
            flexDirection: "column",
            color: "#555",
            fontSize: "1rem",
          }}
        >
          Amount
          <input
            type="number"
            name="amount"
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              marginTop: "5px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              outline: "none",
              fontSize: "1rem",
              width: "100%", // Make input take full width
            }}
          />
        </label>

        <button
          type="submit"
          style={{
            padding: "12px 0",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background-color 0.3s",
            marginTop: "20px",
            width: "100%", // Make button stretch to the same width as inputs
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Pay
        </button>
      </form>
    </div>
  );
}

export default UserTransactionForm;
