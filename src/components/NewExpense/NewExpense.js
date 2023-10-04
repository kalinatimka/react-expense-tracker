import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = ({onAddExpense}) => {
    const submitExpenseFormHandler = (expenseData) => {
        const expenseItem = {
            ...expenseData,
            id: Math.random().toString(),
        }
        onAddExpense(expenseItem);
    }

    return <div className="new-expense">
        <ExpenseForm onSubmitExpenseForm={submitExpenseFormHandler}></ExpenseForm>
    </div>
}
export default NewExpense;