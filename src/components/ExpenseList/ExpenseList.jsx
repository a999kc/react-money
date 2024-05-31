import React from 'react';
import { useSelector } from 'react-redux';
import './ExpenseList.css'; 

const categoryIcons = {
  Food: '🍔',
  Transport: '🚗',
  Entertainment: '🎮',
  
};

const ExpenseList = () => {
  const expenses = useSelector((state) => state.expenses.expenses || []);

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    
    <div className="expense-list-container">
      <div className="expense-header">Список расходов</div>
      <ul className="expense-list">
        {expenses.map((expense, index) => (
          <li key={index} className="expense-item">
            <span className="expense-category">
              <span className="expense-category-icon">{categoryIcons[expense.category]}</span>
              {expense.category}
            </span>
            <span className="expense-amount">{expense.amount} ₽</span>
          </li>
        ))}
      </ul>
      <div className="total-expenses">Общая сумма: {totalExpenses} ₽</div>
    </div>
   
  );
};

export default ExpenseList;
