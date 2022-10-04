import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = props => {
    // return paragraph if no expenses found
    if(props.items.length === 0){
        return <h2 className ='expenses-list__fallback'> No expenses found</h2>
    }

    // if found, render list
    return <ul className='expenses-list'>
        {props.items.map((expense) => (
                <ExpenseItem key={expense.id}
                             title={expense.title}
                             amount={expense.amount}
                             date={expense.date}/>
            ))}
    </ul>
};

export default ExpensesList