import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Eventos from './components/Events';
import About from './components/About';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return (
        <Router>
            <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
                <Header toggleDarkMode={toggleDarkMode} />
                <MainContent />
                <Footer />
            </div>
        </Router>
    );
}

const MainContent = () => {
    const location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                timeout={300}
                classNames="fade"
            >
                <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/events" element={<Eventos />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
};
// Função para desativar o scroll
function disableScroll() {
    document.body.style.overflow = 'hidden';
}

// Função para ativar o scroll
function enableScroll() {
    document.body.style.overflow = '';
}

// Desativar scroll ao abrir um modal
disableScroll();

// Ativar scroll ao fechar o modal
enableScroll();

export default App;
