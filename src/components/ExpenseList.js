import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { BudgetContext } from "./../context/budget-context";

const ExpenseList = () => {
  const ctx = useContext(BudgetContext);
  return (
    <div>
      <h2>Expense list</h2>
      <div
        style={{
          border: "1px solid rgb(226, 226, 226)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {ctx.budgetData.expenses.length > 0 ? (
          ctx.budgetData.expenses.map((item, index) => {
            return <ExpenseItem item={item} index={index} />;
          })
        ) : (
          <div className="show-expenses" style={{ width: "100%" }}>
            No Expense Found
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseList;
