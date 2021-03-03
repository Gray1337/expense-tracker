import React, { useState, useContext } from 'react'
import { ExpenseTrackerContext } from "../../../context/context";
import { v4 as uuidv4 } from "uuid";
import { Row, Col,  Select, InputNumber, DatePicker, Divider, Form, Button } from 'antd'
import moment from 'moment'
import { incomeCategories, expenseCategories } from "../../../constants/categories";

const { Option } = Select;

const initialState = {
  type:'',
  category:'',
  amount:'',
  date:''
}

const FormOpt = () => {
  
  const [formData, setFormData] = useState(initialState)
  const {addTransaction} = useContext(ExpenseTrackerContext)
  const addItem = () =>{
    if(formData.type === ''){
      alert('請選擇收入/支出')
    }else if(formData.category === ''){
      alert('請選擇種類')
    }else if (formData.amount === ''){
      alert('請輸入金額')
    }else if ( formData.date === ''){
      alert('請選擇日期')
    }else {
      const newItem = {...formData,id:uuidv4()}
      addTransaction(newItem)
      setFormData(initialState)
    }
  }
  // console.log(formData)
  const selectedCategories = formData.type === '收入' ? incomeCategories : expenseCategories

  return (
    <Form style={{marginBottom:'40px'}}>
      <Form.Item>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              required
              label="收入/支出"
              style={{display:'block', marginBottom:0}}
            >
              <Select value={formData.type} style={{width:'100%'}} onChange={(e)=>setFormData({...formData,category:'',type:e})}>
                <Option value="收入">收入</Option>
                <Option value="支出">支出</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label='種類'
              required={true}
              style={{display:'block', marginBottom:0}}
            >
              <Select value={formData.category} style={{width:'100%'}} onChange={(e)=>setFormData({...formData,category:e})}>
                {selectedCategories.map(c=><Option key={c.type} value={c.type}>{c.type}</Option>)}
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>
      <Divider/>
      <Form.Item>
        <Row align="middle" gutter={16}>
          <Col span={12}>
            <Form.Item
              label="輸入金額"
              style={{display:'block', marginBottom:0}}
              required
            >
              <InputNumber type='Number' value={formData.amount} style={{width:'100%'}} onChange={(e)=>setFormData({...formData,amount:e})} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item 
              label="選擇日期"
              style={{display:'block', marginBottom:0}}
              required={true}
            >
              <DatePicker 
                value={formData.date === '' ? '' : moment(formData.date)}
                style={{width:'100%',padding:'1px 11px'}} 
                onChange={(d,dateString)=>setFormData({...formData, date:dateString})} 
              />
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>
      <Form.Item>
        <Button type="primary" block shape={'round'} style={{height:'40px'}} onClick={addItem}>新增紀錄</Button>
      </Form.Item>
    </Form>
  )
}

export default FormOpt
