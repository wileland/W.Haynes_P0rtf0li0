import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; 
import "./index.css"; // 

const root = document.getElementById("root"); 

// Check if root is not null before calling createRoot
if (root !== null) {
  const rootElement = ReactDOM.createRoot(root);
  rootElement.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element");
}
