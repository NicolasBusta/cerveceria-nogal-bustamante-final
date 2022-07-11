import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <nav className="navbar bg-warning">
            <Link className="fs-1" to="/">Cerveza Nogal</Link>
                <Link className="nav-link link-dark fs-5" to="/category/rubias">Rubias</Link>
                <Link className="nav-link link-dark fs-5" to="/category/rojas">Rojas</Link>
                <Link className="nav-link link-dark fs-5" to="/category/negras">Negras</Link>
                <Link className="nav-link link-dark fs-5" to="/cart">Carrito</Link>
            <Link to="/cart">
                <CartWidget />
            </Link>
        </nav>
    );
};

export default Navbar;
