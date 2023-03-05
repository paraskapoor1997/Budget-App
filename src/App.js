import "./App.css";
import Home from "./components/Home";
import { useContext, useEffect } from "react";
import { BudgetContext } from "./context/budget-context";

function App() {
  const ctx = useContext(BudgetContext);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
