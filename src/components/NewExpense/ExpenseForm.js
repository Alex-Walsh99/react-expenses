import './ExpenseForm.css'
import {useState} from "react";
import ErrorModal from "../Error/ErrorModal";
import {Fragment, useRef} from "react";

const ExpenseForm = (props) => {
    //const [enteredTitle, setEnteredTitle] = useState('');
    //const [enteredAmount, setEnteredAmount] = useState('');
    //const [enteredDate, setEnteredDate] = useState('');

    const titleInputRef = useRef();
    const amountInputRef = useRef();
    const dateInputRef = useRef();

    const [error, setError] = useState();

    const errorHandler = () => {
        setError(null);
    }

    const cancelExpenseHandler = () => {
        props.setFormCollapsed(true);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredAmount = amountInputRef.current.value;
        const enteredDate = new Date(dateInputRef.current.value);

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: enteredDate
        }

        if (enteredTitle.trim().length === 0 || enteredAmount.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid title and amount (non-empty values)."
            });
            return;
        }

        if (+enteredTitle < 0.01) {
            setError({
                title: "Invalid amount",
                message: "Please enter valid amount (> 0)."
            });
            return;
        }

        // execute handler function passed through parent
        props.onSaveExpenseData(expenseData);
    }

    return (
        // Fragment wraps the content in singular empty root component so that multiple adjacent elements can be returned as one singular element.
        // div is omitted on render leading to clean and optimized rendered code

        //Example of js code inside of JSX. In the curly braces the program checks if an error has been thrown from the error state, and if so, outputs an ErrorModal
        <Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" ref={titleInputRef}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" min="0.00" step="0.01" ref={amountInputRef}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" min="2019-01-01" max="2022-12-31" ref={dateInputRef}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button onClick={cancelExpenseHandler}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </Fragment>
    );
}

export default ExpenseForm;