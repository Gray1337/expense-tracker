import { Card } from 'antd'
import React, { useContext } from 'react'
import FormOpt from './Form/Form';
import ListTracker from './List/List';
import { ExpenseTrackerContext } from "../../context/context";

const Main = ({title,color,bgc}) => {
  const {balance} = useContext(ExpenseTrackerContext)
  return (
    <div>
      <Card headStyle={{color:color,backgroundColor:bgc,fontWeight:'bold'}} title={title} style={{boxShadow:'rgba(30, 144, 255, 0.2) 2px 4px 10px'}}>
        <h2>餘額:{balance}</h2>
        <FormOpt />
        <ListTracker />
      </Card>
    </div>
  )
}

export default Main
