import React, { useReducer, createContext } from 'react'
import contextReducer from './contextReducer'

const initialState = JSON.parse(localStorage.getItem('transaction')) || []
export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({children}) =>{
  const [transactions, dispatch] = useReducer(contextReducer, initialState)
  
  // action creators
  const deleteTransaction = (id) => dispatch({type:'Delete', payload:id})
  const addTransaction = (transaction) => dispatch({type:'Add', payload:transaction})
  
  console.log('transaction',transactions)

  const balance = transactions.reduce((acc,currVal) => currVal.type === '支出' ? acc -= currVal.amount : acc += currVal.amount,0)

  return(
    <ExpenseTrackerContext.Provider value={{
      deleteTransaction,
      addTransaction,
      transactions,
      balance
    }}>
      {children}
    </ExpenseTrackerContext.Provider>
  )
}