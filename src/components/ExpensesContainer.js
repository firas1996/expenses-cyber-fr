import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesContainer.css";

const ExpensesContainer = (props) => {
  return (
    <div className="ex-Container">
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        );
      })}
    </div>
  );
};

export default ExpensesContainer;
