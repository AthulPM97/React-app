import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {

  const [isEditing, setIsEditing] = useState(true);

  const editingHandler = () => {
    setIsEditing(false);
  }

  const stopEditingHandler = () => {
    setIsEditing(true);
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {isEditing && <button onClick={editingHandler}>Add New Expense</button>}
      {!isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {stopEditingHandler}/>}
    </div>
  );
}

export default NewExpense;
