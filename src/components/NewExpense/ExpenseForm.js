import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {
    const [title,setTitle] = useState('');
    const [amount,setAmount] = useState('');
    const [date,setDate] = useState('');
    const formSubmitHandler= event =>{
        event.preventDefault();
        const formData = {
            title:title,
            amount:amount,
            date: new Date(date)
        }
        props.onSubmitFormData(formData);
        setTitle('');
        setAmount('');
        setDate('');
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type="text" 
                        onChange={(e)=>setTitle(e.target.value)}
                        value={title} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type="number" 
                        min="0.01" 
                        step="0.01"
                        value={amount}
                        onChange={(e)=>setAmount(e.target.value)} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        type="date"
                        value={date}
                        onChange={(e)=>setDate(e.target.value)} />
                </div>
                <div className="new-expense__actions">
                   <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm
