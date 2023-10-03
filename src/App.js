import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "id1",
      title: "Toilet Paper",
      amount: 1.35,
      date: new Date(2023, 4, 22),
    },
    {
      id: "id1",
      title: "New TV",
      amount: 431.28,
      date: new Date(2023, 5, 23),
    },
    {
      id: "id1",
      title: "Car Insurance",
      amount: 123,
      date: new Date(2023, 6, 24),
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
      <NewExpense></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
