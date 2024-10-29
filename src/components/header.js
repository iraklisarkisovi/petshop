import React, { useState, useEffect } from 'react';
import "../App.css"
import { Link } from 'react-router-dom';
import iconCart from '../assets/images/iconCart.png';
import { useSelector } from 'react-redux';

const Header = () => {
    const [totalQuantity, setTotalQuantity] = useState(0);
    const carts = useSelector(store => store.cart.items);

    useEffect(() => {
        let total = 0;
        carts.forEach(item => total += item.quantity);
        setTotalQuantity(total);
    }, [carts]);

    return (
        <header className="header">
            <Link to="/" className="header__link header__link--home">Pet-Shop</Link>
            <Link to="/" className="header__link header__link--home">Home</Link>
            <Link to="/favorites" className="header__link header__link--favorites">Favorites</Link>
            <Link to="/cart" className="header__cart">
                <img src={iconCart} alt="Cart" className="header__cart-icon" />
                <span className="header__cart-badge">
                    {totalQuantity}
                </span>
            </Link>
        </header>
    );
}

export default Header;
