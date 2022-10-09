import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = ({ props }) => {
  return (
    <Card className="expenses">
      {props.map((_, index) => (
        <ExpenseItem
          title={props[index].title}
          amount={props[index].amount}
          date={props[index].date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
