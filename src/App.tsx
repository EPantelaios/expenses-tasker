import { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import dataExpenses from './utils/dataExpenses.json';

const App = () => {
  //convert date format of json file to Date() js object
  const expenses = dataExpenses.map((expense) => {
    return {
      ...expense,
      date: new Date(Date.parse(expense.date)),
    };
  });

  const [expensesList, setExpensesList] = useState(expenses);

  const addExpenseHandler = (expense) => {
    setExpensesList((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses props={expensesList} />
    </>
  );
};

export default App;
