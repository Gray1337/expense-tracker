const contextReducer = (state, action) =>{
  switch (action.type){
    case 'Delete':
      const delItem = state.filter((t)=>t.id !== action.payload)
      localStorage.setItem('transaction',JSON.stringify(delItem))
      return delItem;
    case 'Add':
      const addItem = [action.payload, ...state]
      localStorage.setItem('transaction',JSON.stringify(addItem))
      return addItem
  }
}

export default contextReducer