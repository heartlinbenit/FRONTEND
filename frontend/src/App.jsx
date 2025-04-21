import React from "react";
import Dashboard from "./components/Dashboard";
import SummaryCards from "./components/SummaryCards";
import DownloadCSV from "./components/DownloadCSV";
import transactions from "./Data.jsx"; // ✅ corrected here

function App() {
  return (
    <div>
      <Dashboard transactions={transactions} />
      <SummaryCards transactions={transactions} />
      <DownloadCSV transactions={transactions} />
    </div>
  );
}

export default App;
