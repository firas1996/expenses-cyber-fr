import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesContainer = (props) => {
  return (
    <div>
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
