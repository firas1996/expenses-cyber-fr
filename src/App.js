import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "New Phone",
      date: new Date(2024, 10, 10),
      price: 1234.9,
    },
    {
      id: "e2",
      title: "Education",
      date: new Date(2023, 8, 15),
      price: 4567,
    },
    {
      id: "e3",
      title: "Voyage",
      date: new Date(2025, 11, 25),
      price: 2500,
    },
    {
      id: "e4",
      title: "New PC",
      date: new Date(2024, 2, 10),
      price: 3333,
    },
  ];
  return (
    <div>
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        );
      })}
      {/* <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        price={expenses[3].price}
        date={expenses[3].date}
      /> */}
    </div>
  );
}

export default App;
