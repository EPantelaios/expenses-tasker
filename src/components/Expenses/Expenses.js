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
      {props.map(
        (item) =>
          item.title !== '' &&
          item.amount !== '' &&
          item.date.getFullYear() == filteredYear && (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          )
      )}
    </Card>
  );
};

export default Expenses;
