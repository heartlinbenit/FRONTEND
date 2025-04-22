import { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";
import { useAuth } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Transactions from "./data/Transactions"; // ✅ Add this!


function Home() {
  const navigate = useNavigate();

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundColor: "#fff",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding: "20px",
      color: "#333",
    }}>
      <h1 style={{
        fontSize: "2.5rem",
        color: "#333",
        marginBottom: "30px",
        fontWeight: "600",
        letterSpacing: "1px",
      }}>
        Welcome to Transaction App
      </h1>

      <div style={{
        display: "flex",
        gap: "25px",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "100%",
      }}>
        <button
          onClick={() => navigate("/admin/login")}
          style={{
            padding: "14px 28px",
            fontSize: "1.1rem",
            backgroundColor: "#2196f3",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(33, 150, 243, 0.3)",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1976d2")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#2196f3")}
        >
          Admin
        </button>

        <button
          onClick={() => navigate("/user")}
          style={{
            padding: "14px 28px",
            fontSize: "1.1rem",
            backgroundColor: "#4caf50",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(76, 175, 80, 0.3)",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#388e3c")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4caf50")}
        >
          User
        </button>
      </div>
    </div>
  );
}
function AppRoutes({ transactions, addTransaction }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin/login" element={<Login />} />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <UserPage transactions={transactions} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user"
        element={
          <AdminPage transactions={transactions} addTransaction={addTransaction} />
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default function App() {
  const [transactions, setTransactions] = useState(Transactions); // ✅ Use imported data

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <AppRoutes transactions={transactions} addTransaction={addTransaction} />
  );
}
