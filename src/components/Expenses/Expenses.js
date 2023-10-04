import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

import "./Expenses.css";
import { useState } from "react";

function Expenses({ expenses }) {
  const [ year, setYear ] = useState('2021');

  const yearChangeHandler = (year) => {
    setYear(year);
    console.log(year);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter year={year} onYearChange={yearChangeHandler}></ExpensesFilter>
      <ExpenseItem expense={expenses[0]}></ExpenseItem>
      <ExpenseItem expense={expenses[1]}></ExpenseItem>
      <ExpenseItem expense={expenses[2]}></ExpenseItem>
      <ExpenseItem expense={expenses[3]}></ExpenseItem>
    </Card>
  );
}

export default Expenses;
