import React, { useState, useEffect } from 'react';
import SalaryInput from './components/SalaryInput';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import BalanceDisplay from './components/BalanceDisplay';
import './styles.css';

function App() {
  const [salary, setSalary] = useState(0);
  const [expenses, setExpenses] = useState([]);

  // Load saved data from localStorage
  useEffect(() => {
    const savedSalary = localStorage.getItem('salary');
    const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];

    if (savedSalary) setSalary(parseFloat(savedSalary));
    if (savedExpenses) setExpenses(savedExpenses);
  }, []);

  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem('salary', salary);
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [salary, expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="container">
      <h1>Finance Tracker</h1>
      <SalaryInput salary={salary} setSalary={setSalary} />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} setExpenses={setExpenses} />
      <BalanceDisplay salary={salary} expenses={expenses} />
    </div>
  );
}

export default App;



