import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState(0);
  // const [entereddate, setEnteredDate] = useState('');

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (e) => {
    setUserInput(() => {
      return {
        ...userInput,
        enteredTitle: e.target.value,
      };
    });
  };
  const amountChangeHandler = (e) => {
    setUserInput(() => {
      return {
        ...userInput,
        enteredAmount: e.target.value,
      };
    });
  };
  const dateChangeHandler = (e) => {
    setUserInput(() => {
      return {
        ...userInput,
        enteredDate: e.target.value,
      };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
    props.onCancel();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control input">
            <label>Title</label>
            <input
              type="text"
              value={userInput.enteredTitle}
              onChange={titleChangeHandler}
            ></input>
          </div>
          <div className="new-expense__control input">
            <label>Amount</label>
            <input
              type="number"
              value={userInput.enteredAmount}
              onChange={amountChangeHandler}
            ></input>
          </div>
          <div className="new-expense__control input">
            <label>Date</label>
            <input
              type="date"
              value={userInput.enteredDate}
              onChange={dateChangeHandler}
            ></input>
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
