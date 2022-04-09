import React from 'react';
import './style.css';

const AppNavBar = ({children}) => {
    return (
        <section className="nav">
            <div className="nav-container">
                <div className="nav-logo">
                    <h2>Dawtify</h2>
                </div>
                <nav>
                    {children}
                </nav>
            </div>
        </section>
    );
};

export default AppNavBar;