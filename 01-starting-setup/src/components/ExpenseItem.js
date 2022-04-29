import './ExpenseItem.css'
import ExpenseData from './ExpenseDate'
import React from 'react'
import Card from './Card'

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseData date={props.date} />

      <div className="expexe-item__description">
        <h2>{props.title}</h2>

        <div className="expense-item__price"> $ {props.amount} </div>
      </div>
    </Card>
  )
}

export default ExpenseItem
