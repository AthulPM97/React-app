import { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const [expense, setExpense] = useState(props.amount);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails
          title={title}
          amount={expense}
        />
      </Card>
    </li>
  );
}

export default ExpenseItem;
