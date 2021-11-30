import './App.css';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import expenses from './expensesData';

function App() {
  const getExpenseData=(expenseData)=>{
    console.log('In App.js');
    console.log(expenseData);
  }
 
  return (
    <div className="App">
    Expense Tracker
    <NewExpense onExpenseFormSubmit={getExpenseData} />
    <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
