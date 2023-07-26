import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2023, 7, 25);
  const expenceTitle = 'Car Insurance';
  const expenceAmount = 123;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenceTitle}</h2>
        <div className="expense-item__price">${expenceAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
