import "./ExpenseItem.css";

function ExpenseItem({ expense }) {
  const expenseMonth = expense.date.toLocaleString('en-US', { month: 'long' });
  const expenseYear = expense.date.toLocaleString('en-US', { day: '2-digit' });;
  const expenseDay = expense.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{expenseMonth}</div>
        <div>{expenseYear}</div>
        <div>{expenseDay}</div>
      </div>
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
