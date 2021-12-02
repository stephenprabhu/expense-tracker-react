import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
import {useState} from 'react';

const NewExpense = (props) => {
    const [showForm, setShowForm]= useState(false);
    const getExpenseFormData=(expenseData)=>{
        const mainData = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onExpenseFormSubmit(mainData);
    }

    const cancelClickHandler=()=>{
        setShowForm(false);
    }
    return (
        <div className="new-expense">
             {showForm ? <ExpenseForm onSubmitFormData={getExpenseFormData} onCancelClick={cancelClickHandler} /> : 
             <button type="button" onClick={(e)=>setShowForm(true)}>Add Expense</button>
             }
        </div>
    )
}

export default NewExpense;
