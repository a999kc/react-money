import React from "react";
import { Link } from "react-router-dom";
import './Header.css'







const Header = ({ addExpense }) => {
    const handleAddExpense = () => {
      const amount = prompt('Введите сумму расходов:');
      const category = prompt('Введите категорию расхода (например, Food, Transport, Entertainment):');
      if (!isNaN(amount) && category) {
        addExpense(amount, category);
      } else {
        alert('Некорректный ввод. Попробуйте еще раз.');
      }
    };
      
return (
    <div className="container">
        <header className="header">
            <nav className="nav-menu">
                <Link to="/">Главная</Link>
                <Link to="/about" onClick={handleAddExpense}>Добавить расходы</Link>
            </nav>
        </header>
    </div>
)
    



}

export default Header;