import React from 'react';
import { Link,NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer navbar navbar-expand-lg bg-warning mt-2">
             <div class="container-fluid">
            <nav className="navbar bg-warning">
            <NavLink className="fs-5" to="/">Cerveza Nogal</NavLink>
            <a className="text-dark" href='http://facebook.com'>Facebook</a>
            <a className="text-dark" href='https://www.instagram.com'>Instagram</a>
            <a className="text-dark" href='https://www.whatsapp.com/'>Whatsapp</a>
        </nav>
        <p>Copyright &copy; Cerveza Nogal</p>
        </div>
        </footer>
    );
};

export default Footer;
