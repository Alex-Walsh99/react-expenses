import './Expenses.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props){

    const [filterSelectedYear, setFilterSelectedYear] = useState('2020')

    const filterChangeHandler = (filteredYear) => {
        setFilterSelectedYear(filteredYear);
    };

    // array is filtered on re-render by set year
    // Does not require a new state as array is filtered on same state-change as selected year
    const filteredExpenses = props.items.filter(expense => { return expense.date.getFullYear().toString() === filterSelectedYear})

    return(
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filterSelectedYear} onChangeFilter={filterChangeHandler}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;