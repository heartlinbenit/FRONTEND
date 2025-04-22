import React from "react";
import Dashboard from "../components/Dashboard";

function UserPage({ transactions }) {
  return (
    <div>
    
      <Dashboard transactions={transactions} />
    </div>
  );
}

export default UserPage;
