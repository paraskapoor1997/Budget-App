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
    // const postData = async () => {
    //   const response = await fetch(
    //     `https://budget-app-a9400-default-rtdb.asia-southeast1.firebasedatabase.app/BudgetApp.json`,
    //     {
    //       method: "POST",
    //       header: { "Content-type": "application/json" },
    //       body: JSON.stringify({
    //         total: totalBudgetInput,
    //         expenses: [],
    //         totalExpense: 0,
    //         title: "",
    //         cost: 0,
    //       }),
    //     }
    //   );
    // };
    // postData();
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
        <div>
          <input
            placeholder="enter total amount"
            value={totalBudgetInput}
            type="number"
            onChange={totalAmountHandler}
          />
        </div>
        <button style={{ marginTop: "15px" }} type="submit">
          {" "}
          Set Budget
        </button>
      </form>
    </div>
  );
};

export default Budget;
