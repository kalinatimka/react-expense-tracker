import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem({ expense }) {
  const [title, setTitle] = useState(expense.title);

  const onClickHandler = () => {
    setTitle('Another title');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
      </div>
      <button onClick={onClickHandler}>Click me!</button>
    </Card>
  );
}

export default ExpenseItem;
