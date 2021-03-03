import React, { useContext } from 'react'
import { List } from 'antd';
import { DollarCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import styled from "@emotion/styled";
import InfiniteScroll from 'react-infinite-scroller';
import {ExpenseTrackerContext} from '../../../context/context'

const ListContainer = styled.div`
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  overflow: auto;
  padding: 8px 24px;
  height: 200px;
`

const ListTracker = () => {

  const {transactions, deleteTransaction} = useContext(ExpenseTrackerContext)

  return (
    <ListContainer>
      <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          useWindow={false}
          loadMore={''}
        >
          <List
            dataSource={transactions}
            renderItem={item => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={ item.type === '收入' ? 
                    (<DollarCircleOutlined style={{color:'green',fontSize:'24px'}}/>) 
                    : (<DollarCircleOutlined style={{color:'red',fontSize:'24px'}}/>)
                  }
                  title={<div>${item.amount}</div>}
                  description={<div>{item.category} - {item.date}</div>}
                />
                <DeleteOutlined style={{fontSize:'24px'}} onClick={()=>deleteTransaction(item.id)} />
              </List.Item>
            )}
          >
          </List>
        </InfiniteScroll>
    </ListContainer>
  )
}

export default ListTracker
