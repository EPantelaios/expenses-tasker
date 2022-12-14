import { useState, useEffect } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [showMenuForAddExpense, setShowMenuForAddExpense] = useState(false);
  const [disableButton, setDisableButton] = useState(true);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setShowMenuForAddExpense((prevState) => !prevState);
    setDisableButton(true);
  };

  const handlerInitialMenu = (event) => {
    event.preventDefault();

    setDisableButton(true);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setShowMenuForAddExpense((prevState) => !prevState);
  };

  const hoverButtonMessage = disableButton
    ? 'Fill all input fields and then press this button'
    : 'Press the button to add new expense';

  useEffect(() => {
    if (enteredTitle && enteredAmount && enteredDate) setDisableButton(false);
  }, [enteredAmount, enteredDate, enteredTitle]);

  return (
    <>
      {showMenuForAddExpense ? (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                placeholder="Enter title..."
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
                onKeyPress={(e) => {
                  e.key === 'Enter' && e.preventDefault();
                }}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                placeholder="Enter amount..."
                type="number"
                min="0.01"
                step="0.01"
                value={enteredAmount}
                onChange={amountChangeHandler}
                onKeyPress={(e) => {
                  e.key === 'Enter' && e.preventDefault();
                }}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2010-01-01"
                max="2025-12-31"
                value={enteredDate}
                onChange={dateChangeHandler}
                onKeyPress={(e) => {
                  e.key === 'Enter' && e.preventDefault();
                }}
              />
            </div>
          </div>

          <div className="new-expense__buttons">
            <div className="new-expense__actions">
              <button onClick={handlerInitialMenu}>Cancel</button>
            </div>
            <div className="new-expense__actions">
              <button
                disabled={disableButton}
                title={hoverButtonMessage}
                type="submit"
              >
                Add Expense
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="new-expense__nodialog">
          <button onClick={handlerInitialMenu}>Add New Expense</button>
        </div>
      )}
    </>
  );
};

export default ExpenseForm;
