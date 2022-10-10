import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import FilterByYear from './FilterByYear';
import './Expenses.css';

const Expenses = ({ props }) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <h2 style={{ color: 'grey', textAlign: 'center' }}>
        Selected Year: {filteredYear}
      </h2>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* <FilterByYear props={props} /> */}
      <ul className="expenses-list">
        {filteredExpenses.length > 0 ? (
          filteredExpenses.map(
            (item) =>
              item.title !== '' &&
              item.amount !== '' && (
                <ExpenseItem
                  key={item.id}
                  title={item.title}
                  amount={item.amount}
                  date={item.date}
                />
              )
          )
        ) : (
          <p
            style={{ color: 'grey', fontWeight: 'bold', margin: 'auto 0.5rem' }}
          >
            No expenses found.
          </p>
        )}
      </ul>
    </Card>
  );
};

export default Expenses;
