import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

function ExpenseItem(props) {
        const clickHandler = (e) => {
            console.log(e.target.parentNode);
            const item = e.target.parentNode;
            item.remove();
        }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={props.title} 
            locationOfExpenditure={props.locationOfExpenditure}
            amount={props.amount}/>
            <button onClick={clickHandler}>Delete</button>
        </Card>
    )
}

export default ExpenseItem;

