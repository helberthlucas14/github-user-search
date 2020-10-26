import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
    <nav className="main-nav primary">
        <Link to="/" className="nav-logo-text">
            <h1> Bootcamp DevSuperior </h1>
        </Link>
    </nav>
)

export default Navbar;
