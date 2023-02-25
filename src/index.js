import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import BudgetProvider from "./context/budget-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BudgetProvider>
    <App />
  </BudgetProvider>
);
