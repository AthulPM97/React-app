import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  let expensesContent = (
    <h2 className="expenses-list__fallback">No expenses found.</h2>
  );
  const addMoreMessage = (
    <p className="expenses-list__fallback">
      Only single expense here. Please add more...
    </p>
  );

  if (props.items.length >= 1) {
    expensesContent = props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        locationOfExpenditure={expense.locationOfExpenditure}
      ></ExpenseItem>
    ));
  }
  return (
    <ul className="expenses-list">
      {expensesContent}
      {props.items.length === 1 && addMoreMessage}
    </ul>
  );
};

export default ExpenseList;
