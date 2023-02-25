import React, { useState } from "react";

export const BudgetContext = React.createContext();

const BudgetProvider = (props) => {
  const [budgetData, setBudgetData] = useState({
    total: 0,
    expenses: [],
    totalExpense: 0,
    title: "",
    cost: 0,
  });

  return (
    <BudgetContext.Provider value={{ budgetData, setBudgetData }}>
      {props.children}
    </BudgetContext.Provider>
  );
};

export default BudgetProvider;
