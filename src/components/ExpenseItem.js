import React, { useContext } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { BudgetContext } from "./../context/budget-context";

const ExpenseItem = ({ item, index }) => {
  const ctx = useContext(BudgetContext);

  const editHandler = (selectedItem) => {
    ctx.setBudgetData((prev) => ({
      ...prev,
      title: selectedItem.title,

      cost: selectedItem.cost,
    }));
  };

  const deleteHandler = (selectedItem) => {
    const obj = ctx.budgetData.expenses.filter((item) => item.title !== selectedItem.title);

    ctx.setBudgetData((prev) => ({
      ...prev,
      expenses: obj,
      totalExpense: parseInt(prev.totalExpense) - parseInt(selectedItem.cost),
      title: "",
      cost: "",
    }));
  };
  return (
    <div key={index} style={{ display: "flex" }}>
      <div className="show-detail">{item.title}</div>
      <div className="show-detail">{item.cost}</div>
      <div onClick={() => editHandler(item)} className="show-detail">
        <FiEdit />
      </div>
      <div onClick={() => deleteHandler(item)} className="show-detail">
        <RiDeleteBinLine />
      </div>
    </div>
  );
};

export default ExpenseItem;
