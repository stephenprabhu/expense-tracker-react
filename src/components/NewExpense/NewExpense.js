import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const getExpenseFormData=(expenseData)=>{
        const mainData = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onExpenseFormSubmit(mainData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSubmitFormData={getExpenseFormData}/>
        </div>
    )
}

export default NewExpense
