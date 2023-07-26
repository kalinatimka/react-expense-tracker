import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "id1",
      title: "Toilet Paper",
      amount: 1.35,
      date: new Date(2023, 7, 25),
    },
    {
      id: "id1",
      title: "New TV",
      amount: 431.28,
      date: new Date(2023, 7, 25),
    },
    {
      id: "id1",
      title: "Car Insurance",
      amount: 123,
      date: new Date(2023, 7, 25),
    },
    {
      id: "id1",
      title: "New Desk (Wooden)",
      amount: 50.45,
      date: new Date(2023, 7, 25),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
