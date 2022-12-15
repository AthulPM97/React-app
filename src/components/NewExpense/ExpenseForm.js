import "./ExpenseForm.css";

const ExpenseForm = () => {

    const titleChangeHandler = (e) => {
        console.log(e.target.value);
    }
    const amountChangeHandler = (e) => {
        console.log(e.target.value);
    }
    const dateChangeHandler = (e) => {
        console.log(e.target.value);
    }

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
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
