import logo from './logo.svg';
import './App.css'; 

import { useSelector, useDispatch } from 'react-redux';
import ExpenseList from './components/ExpenseList/ExpenseList';
import ExpenseChart from './components/ExpenseChart/ExpenseChart';
import { addExpense } from './redux/expensesReducer';
import Header from './components/Header/Header'
import React,{useState} from 'react'
import './styles.css'; 

function App() {
  
  const dispatch = useDispatch();

  const handleAddExpense = (expense, category) => {
    dispatch(addExpense(expense, category));
  };

  return (
    <>
      <Header addExpense={handleAddExpense} />
      <div className="container">
        <main className="main-container">
            <div className="expenses-container">
              <ExpenseList />
              <ExpenseChart />
            </div>
        </main>
      </div>
    </>
  );
}

export default App;
