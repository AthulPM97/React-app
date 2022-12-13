import Card from "./components/UI/Card";
import ExpenseItem from "./components/Expenses/ExpenseItem";

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      locationOfExpenditure: 'Super market'
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12), 
    locationOfExpenditure: 'TV store'
  },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      locationOfExpenditure: 'Insurance office'
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      locationOfExpenditure: 'Furniture store'
    },
  ];
  return (
    <Card className="expenses">
      
      {
        //using map to iterate through each expense 
        expenses.map(expense => {
          return (
            //setting expense properties as custom html component attribute to pass it as props to expenseitem.js
            
            <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            locationOfExpenditure={expense.locationOfExpenditure}
            ></ExpenseItem>
            
          );
        })}

    </Card>
  );
}

export default App;
