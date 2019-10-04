import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <div className="header__item">BookStore</div>
            </Link>
            <Link to="/cart">
                <div className="header__item">Cart</div>
            </Link>
        </header>
    )
}

export default Header