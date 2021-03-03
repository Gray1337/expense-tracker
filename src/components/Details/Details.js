import React from 'react'
import { Card } from 'antd'
import { Doughnut } from 'react-chartjs-2';
import useTransaction from "../../useTransactionAPI/useTransaction";

const Details = ({title,bgc,color,marginBot,shadow}) => {
  const {total, chartData} = useTransaction({title})
  return (
    <Card title={title} headStyle={{color:color,backgroundColor:bgc,fontWeight:'bold'}} style={{boxShadow:shadow,marginBottom:marginBot}}>
      <p>${total}</p>
      <Doughnut data={chartData} />
    </Card>
  )
}

export default Details
