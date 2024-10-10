import "./ExpenseItem.css";

import React from "react";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>Date</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">€ {props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
