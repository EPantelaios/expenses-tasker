import { useState } from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = ({ props }) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpensesByYear = props.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  const sortExpensesByDate = filteredExpensesByYear.sort(
    (a: Record<string, string>, b: Record<string, string>) => {
      return +new Date(a.date) - +new Date(b.date);
    }
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
      <ExpensesChart expenses={sortExpensesByDate} />
      <ul className="expenses-list">
        {sortExpensesByDate.length ? (
          sortExpensesByDate.map(
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
