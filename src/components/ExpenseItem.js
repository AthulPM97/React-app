import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2021, 2, 28);
    const description = "car insurance";
    const price = 218;
    const locationOfExpenditure = "Insurance office";

    return (
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{description}</h2>
                <div>{locationOfExpenditure}</div>
                <div className='expense-item__price'>{`$ ${price}`}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;