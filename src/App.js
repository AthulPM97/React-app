import Card from "./components/UI/Card";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      locationOfExpenditure: "Super market",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      locationOfExpenditure: "TV store",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      locationOfExpenditure: "Insurance office",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      locationOfExpenditure: "Furniture store",
    },
  ];

  const [expenseArray, setExpenseArray] = useState(expenses);

  const addExpenseHandler = (expense) => {
    console.log("inside App.js");

    setExpenseArray(() => {
      return([...expenseArray, expense])
    });
    console.log(expenseArray);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Card className="expenses">
        {
          //using map to iterate through each expense
          expenseArray.map((expense) => {
            return (
              //setting expense properties as custom html component attribute to pass it as props to expenseitem.js
              <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                locationOfExpenditure={expense.locationOfExpenditure}
              ></ExpenseItem>
            );
          }) 
        }
      </Card>
    </div>
  );
};

export default App;
