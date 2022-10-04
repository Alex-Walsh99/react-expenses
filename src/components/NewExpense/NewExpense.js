import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

// NewExpense component manages the collapsable "add expense" form
const NewExpense = (props) => {
    const [isCollapsed, setFormCollapsed] = useState(true);

    // this handler houses logic for changing the state of the form from collapsed to open.
    const addNewExpenseHandler = () =>{
        setFormCollapsed(false);
    }

    // handler for saving an expense. Adds the expense data to the existing list of expenses, giving it a random ID.
    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // runs the onAddExpense listener passed down through App.js which runs 'addExpenseHandler'
        props.onAddExpense(expenseData);
    };

    // a conditional return that outputs a button to open the expense form if isCollapsed = false
    // and outputs the form itself if otherwise.
    if(isCollapsed)
        return <div className="new-expense">
            <button onClick={addNewExpenseHandler}>Add New Expense</button>
        </div>
    return <div className="new-expense">
        <ExpenseForm setFormCollapsed = {setFormCollapsed} onSaveExpenseData={saveExpenseDataHandler} />
    </div>

};

export default NewExpense;