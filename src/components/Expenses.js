import React, { useContext, useState } from "react";
import { BudgetContext } from "../context/budget-context";

const Expenses = () => {
  const ctx = useContext(BudgetContext);
  let title = ctx.budgetData.title;
  let cost = ctx.budgetData.cost;

  const titleHandler = (e) => {
    ctx.setBudgetData((prev) => ({
      ...prev,
      title: e.target.value,
    }));
  };
  const costHandler = (e) => {
    ctx.setBudgetData((prev) => ({
      ...prev,
      cost: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = { title, cost };

    let obj = ctx.budgetData.expenses.find((list) => list.title === title);

    if (obj) {
      const expenses = ctx.budgetData.expenses.filter((item) => item.title !== title);
      ctx.setBudgetData((prev) => ({
        ...prev,
        expenses: [...expenses, result],
        totalExpense: parseInt(prev.totalExpense) + parseInt(cost) - parseInt(obj.cost),
        title: "",
        cost: "",
      }));
    } else {
      ctx.setBudgetData((prev) => ({
        ...prev,
        expenses: [...prev.expenses, result],
        totalExpense: parseInt(prev.totalExpense) + parseInt(cost),
        title: "",
        cost: "",
      }));
    }
  };
  return (
    <div>
      <h2>Expenses</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="enter title of Product"
          type="text"
          value={title}
          onChange={titleHandler}
        />
        <br />
        <br />
        <input
          placeholder="enter cost of a Product"
          type="number"
          value={cost}
          onChange={costHandler}
        />
        <br />
        <br />
        <button type="submit">Check Amount</button>
      </form>
    </div>
  );
};

export default Expenses;
