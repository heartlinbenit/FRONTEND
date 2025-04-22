import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { setIsAdminLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      setIsAdminLoggedIn(true);
      navigate("/admin/dashboard");
    } else {
      alert("Invalid username or password");
    }
  };

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
      <h2 style={{
        fontSize: "2rem",
        color: "#333",
        marginBottom: "30px",
        fontWeight: "600",
        letterSpacing: "1px",
      }}>
        Admin Login
      </h2>

      <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "400px", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            outline: "none",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "25px",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            outline: "none",
          }}
        />
        <button
          type="submit"
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
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
