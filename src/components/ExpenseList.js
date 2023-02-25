import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { BudgetContext } from "./../context/budget-context";

const ExpenseList = () => {
  const ctx = useContext(BudgetContext);
  return (
    <div>
      <h1>Expense list</h1>
      {ctx.budgetData.expenses.map((item, index) => {
        return <ExpenseItem item={item} index={index} />;
      })}
    </div>
  );
};

export default ExpenseList;
