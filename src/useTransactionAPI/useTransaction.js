import { useContext } from 'react';
import { ExpenseTrackerContext } from "../context/context";
import { incomeCategories, expenseCategories, resetCategories } from "../constants/categories";

const useTransaction = ({title}) =>{
  // 讀取transactions的值
  const { transactions } = useContext(ExpenseTrackerContext)
  // 區分title=收入/支出
  const transactionPerType = transactions.filter((t)=> t.type === title)
  // 加總收入/支出的總額
  const total = transactionPerType.reduce((acc,currVal)=> acc += currVal.amount ,0)
  // 區分種類
  const categories = title === '收入' ? incomeCategories : expenseCategories
  // 把原始catergory的amount(0)加上新增的amount(n)
  transactionPerType.forEach(t => {
    const category = categories.find(c=>c.type === t.category)
    if(category) { category.amount += t.amount }
  });
  // 過濾amount=0的種類
  const filteredCategory = categories.filter( c => c.amount > 0 )

  console.log('test',{total,transactionPerType,categories})

  const chartData ={
    datasets:[{
      data:filteredCategory.map(c => c.amount),
      backgroundColor:filteredCategory.map(c => c.color)
    }],
    labels:filteredCategory.map(c => c.type)
  }
  resetCategories()

  return ({total, chartData})
}

export default useTransaction