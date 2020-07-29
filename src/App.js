import React from "react";
import Header from "./Header";
import "./App.css";

function App() {
  return (
    // BEM class naming convention
    <div className="App">
      <h1>Hello Clever Programmer, let's build a youtube clone 🔴</h1>

      {/* Header -> First component */}
      <Header />
      {/* Sidebar -> Sidebar is second component */}
      {/* Recommended videos -> third component */}
    </div>
  );
}

export default App;
