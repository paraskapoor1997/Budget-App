import React, { useContext, useState } from "react";
import { BudgetContext } from "./../context/budget-context";

const Budget = (props) => {
  const [totalBudgetInput, setTotalBudgetInput] = useState("");
  const ctx = useContext(BudgetContext);

  const totalAmountHandler = (e) => {
    setTotalBudgetInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ctx.setBudgetData((prev) => ({
      ...prev,
      total: totalBudgetInput,
    }));
    setTotalBudgetInput("");
  };

  return (
    <div>
      <h2>Budget</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="enter total amount"
          value={totalBudgetInput}
          type="number"
          onChange={totalAmountHandler}
        />
        <button type="submit"> Set Budget</button>
      </form>
    </div>
  );
};

export default Budget;
