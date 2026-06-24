import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import Summary from './components/Summary.jsx';
import './App.css';

function App() {

  const [expenses, setExpenses] = useState(() => {
  const storedExpenses = localStorage.getItem('expenses');
  return storedExpenses ? JSON.parse(storedExpenses) : [];
});

  const [selectedCategory,setSelectedCategory] = useState('All');

  useEffect(() => {
  localStorage.setItem('expenses', JSON.stringify(expenses));
}, [expenses]);



  function addExpense(expense) {
    setExpenses(p => [...p, expense]);
  }

  function deleteExpense(index)
  {
      setExpenses(p => p.filter((_, i ) => i !== index));
  }

  const filteredExpenses = selectedCategory === 'All' ? expenses : expenses.filter(item => item.category.toUpperCase()  === selectedCategory.toUpperCase());

  function handleCategoryChange(event)
  {
    setSelectedCategory(event.target.value)
  }

  const totalAmount = filteredExpenses.reduce( (sum,item) => sum+Number(item.amount),0);

  console.log(expenses);
  return (<>
    <ExpenseForm onAddExpense={addExpense}></ExpenseForm>

    <div className="expense-section">
    <div className="expense-filter">
      <label>Filter by category: </label>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="other">Other</option>
      </select>
    </div>

    <ExpenseTable expenses = {filteredExpenses} onDeleteExpense = {deleteExpense}></ExpenseTable>
    <div className="expense-total">
      <h2>Total Expense: ₹ {totalAmount}</h2>
    </div>
    <Summary expenses={filteredExpenses} />
    </div>
  </>);
}

export default App
