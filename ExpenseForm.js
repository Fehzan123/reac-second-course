import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
   const [enteredTitle, setEnteredTitle] = useState('');
   const [enteredAmount, setEnteredAmount] = useState('');
   const [enteredDate, setEnteredDate] = useState('');
   const [valid, setIsValid] = useState(true);

    const titleChange = (e) => {
        setEnteredTitle(e.target.value);
        if (e.target.value.trim().length > 0) {
            setIsValid(true);
        }
    };

    const amountChange = (e) => {
        setEnteredAmount(e.target.value);
    };

    const dateChange = (e) => {
        setEnteredDate(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (enteredTitle.trim().length === 0) {
            setIsValid(false);
            return;
        }
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };


    return (
        <form>
            <div className={`new-expense__controls ${!valid?'Invalid':'red'}`}>
                <div className="expense-item">
                    <label>Title</label>
                    <input 
                        type="text" 
                        value={enteredTitle}
                        onChange={titleChange} 
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type="number"
                        value={enteredAmount}
                        min="0.01" step="0.01"
                        onChange={amountChange} 
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01" max="2022-12-31" 
                        value={enteredDate}
                        onChange={dateChange} 
                    />
                </div>
                <div className="new-expense__actions"></div>
                <button type="submit" onClick={handleSubmit}>Add Expense</button>
                <button type="submit" onClick={props.onCancel}>Cancel</button>
            </div>
        </form>
    );
};

export default ExpenseForm;