import "./ExpenseItem.css";

import React from "react";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("fr-FR", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("fr-FR", { day: "2-digit" });
  // const day = props.date.getDay();
  let title = props.title;
  const handelClick = () => {
    console.log("before: ", title);
    title = "New Title";
    console.log("after: ", title);
  };
  return (
    <div className="expense-item">
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <button onClick={handelClick}>Change Title!</button>
        <div className="expense-item__price">€ {props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
