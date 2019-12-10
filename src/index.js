import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Navbar from "./navbar.js";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
