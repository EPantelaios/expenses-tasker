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
      <h3
        style={{
          color: 'grey',
          textAlign: 'center',
          margin: '0',
        }}
      >
        Selected Year:
      </h3>
      <h2
        style={{
          color: 'grey',
          textAlign: 'center',
          paddingBottom: '.5rem',
          margin: '0.1rem',
        }}
      >
        {filteredYear}
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
            style={{
              color: 'white',
              fontSize: '1.5rem',
              paddingTop: '1rem',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            No expenses found.
          </p>
        )}
      </ul>
    </Card>
  );
};

export default Expenses;
