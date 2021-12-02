import { useState } from 'react';
import './App.css';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import expensesData from './expensesData';

function App() {
  const [expenses,setExpenses] = useState(expensesData);
  
  const getExpenseData=(expenseData)=>{
    setExpenses( previousExpenses => {
      return [expenseData, ...previousExpenses]
    })
  }
 
  return (
    <div className="App">
    <h2>Expense Tracker</h2>
    <NewExpense onExpenseFormSubmit={getExpenseData} />
    <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
