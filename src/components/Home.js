import React, { useContext } from "react";
import { BudgetContext } from "./../context/budget-context";
import Budget from "./Budget";
import ExpenseList from "./ExpenseList";
import Expenses from "./Expenses";

const Home = () => {
  const ctx = useContext(BudgetContext);
  console.log(ctx);
  return (
    <>
      <h2>Budget App</h2>
      <div className="container">
        <div className="container-element">
          <Budget />
        </div>
        <div className="container-element">
          <Expenses />
        </div>
      </div>
      <div className="show-detail-container">
        <div className="show-detail">
          <div>Total Budget</div>
          <div>{ctx.budgetData.total}</div>
        </div>
        <div className="show-detail">
          <div>Expenses</div>
          <div>{ctx.budgetData.totalExpense}</div>
        </div>
        <div className="show-detail">
          <div>Balance</div>
          <div>{ctx.budgetData.total - ctx.budgetData.totalExpense}</div>
        </div>
      </div>
      <div className="">
        <ExpenseList />
      </div>
    </>
  );
};

export default Home;
