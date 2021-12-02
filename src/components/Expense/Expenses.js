import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const expenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear() == selectedYear;
  });

  const setYearChangeHandler = (selectYear) => {
    setSelectedYear(selectYear);
  };


  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        onChangeFilter={setYearChangeHandler}
      />
      <ExpensesChart myexpenses={expenses} />
      <ExpensesList expenses={expenses} />
    </Card>
  );
};

export default Expenses;
