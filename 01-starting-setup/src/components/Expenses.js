import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from './Card'
import ExpensesFilter from './filter/ExpensesFilter'

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('0')

  const filterChangeHandler = (selectedYeat) => {
    setFilteredYear(selectedYeat)
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    if (filteredYear !== '0') {
      return expense.date.getFullYear().toString() === filteredYear
    } else {
      return expense
    }
  })

  let ex = <p>no Expenses found</p>

  if (filteredExpenses.length > 0)
    ex = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      />
    ))

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedf={filteredYear}
          onChangef={filterChangeHandler}
        />
        {ex}
      </Card>
    </div>
  )
}

export default Expenses
