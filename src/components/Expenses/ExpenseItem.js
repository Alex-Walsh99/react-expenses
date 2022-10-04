// importing useState hook from React library
import React, { useState } from "react";

import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props){
    //tells react that value instance can be changed via useState
    //takes argument and returns function to change attribute and a variable that can be changed per component instance
    //const is used as state-updating function is not changed by the program
    //on re-instantiation of component, state is not redefined. old state is simply wrapped into declaration
    //const [title, setTitle] = useState(props.title);

    //clickHandler runs setTitle to schedule an update to the title
    //const clickHandler = () => {
    //    setTitle('Updated Title');
    //}

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;