import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

const Header = ({ toggleDarkMode }) => {
    return (
        <header className="header">
            <h1>Mundo do Drifting</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/gallery">Galeria</Link></li>
                    <li><Link to="/events">Eventos</Link></li>
                    <li><Link to="/about">Sobre</Link></li>
                </ul>
            </nav>
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                Modo Escuro
            </button>
        </header>
    );
}

export default Header;
