import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import "./Expenses.css"

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {
        //using map to iterate through each expense
        props.items.map((expense) => {
          return (
            //setting expense properties as custom html component attribute to pass it as props to expenseitem.js
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              locationOfExpenditure={expense.locationOfExpenditure}
            ></ExpenseItem>
          );
        })
      }
    </Card>
  );
};

export default Expenses;
