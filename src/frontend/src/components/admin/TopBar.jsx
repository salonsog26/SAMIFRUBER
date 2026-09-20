// src/components/admin/TopBar.jsx
import React from 'react';
import '../../styles/variables.css';

function TopBar() {
    return (
        <header className="topbar">
            <div className="topbar-title">Panel de Administrador</div>

            <div className="topbar-user">
                <div className="topbar-role">Administrador</div>
                <img className="topbar-avatar" src="https://placehold.co/40x40" alt="Avatar del administrador" />
            </div>
        </header>
    );
}

export default TopBar;