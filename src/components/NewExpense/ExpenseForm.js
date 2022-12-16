import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState(0);
  // const [entereddate, setEnteredDate] = useState('');

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (e) => {
    console.log(userInput)
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
    console.log(userInput);
  };

  return (
    <div>
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control input">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler}></input>
          </div>
          <div className="new-expense__control input">
            <label>Amount</label>
            <input type="number" onChange={amountChangeHandler}></input>
          </div>
          <div className="new-expense__control input">
            <label>Date</label>
            <input type="date" onChange={dateChangeHandler}></input>
          </div>
          <div className="new-expense__actions">
            <button type="submit" onClick={submitHandler}>
              Add Expense
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
