import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

function ExpenseItem(props) {
        
    return (
        <Card className="expense-item">
        
            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={props.title} 
            locationOfExpenditure={props.locationOfExpenditure}
            amount={props.amount}/>
        
        </Card>
    )
}

export default ExpenseItem;

