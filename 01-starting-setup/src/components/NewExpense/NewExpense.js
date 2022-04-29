import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expensData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    console.log(expensData)
    props.onAddExpense(expensData)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense
