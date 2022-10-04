import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";
import {Fragment} from "react";

// initial array of expenses to render to list

const INIT_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

// our root component
function App() {
    // initializes a state to manage the list
    //outputs expenses: the list itself that will be updated each time an element is added
    //        setExpenses: the function that will set the expenses
    const [expenses, setExpenses] = useState(INIT_EXPENSES);

    // a handler for updating the expenses list with new expenses
    const addExpenseHandler = expense => {
        // use spread op to create array with new expense at front and old expenses at back
        setExpenses(((prevExpenses) => {
            return [expense, ...prevExpenses];
        }));
    }

  return (
      //renders a <NewExpense> component that takes in a pointer to the addExpenseHandler
      // also renders an <Expenses> component that manages the list. Takes in the expense list output by useState.
    <Fragment>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses}/>
    </Fragment>
  );
}

export default App;
