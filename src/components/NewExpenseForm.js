import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const handelTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handelPriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handelDateChange = (event) => {
    setDate(event.target.value);
  };
  const handleSubmit = (event) => {};
  return (
    <div className="new-expense">
      <form onSubmit={handleSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              placeholder="Title"
              onChange={handelTitleChange}
              value={title}
            />
          </div>
          <div className="new-expense__control">
            <label>Price</label>
            <input
              placeholder="Price"
              type="number"
              min="0.01"
              step="0.01"
              onChange={handelPriceChange}
              value={price}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2022-01-01"
              max="2025-12-31"
              onChange={handelDateChange}
              value={date}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default NewExpenseForm;
