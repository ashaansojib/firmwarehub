import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h2 className='title'>All Tested Firmware</h2>
            <div>
                <NavLink className="menu-btn" to="/">Home</NavLink>
                <NavLink className="menu-btn" to="/sp-tools">SP Tool</NavLink>
                <NavLink className="menu-btn" to="/spd-tools">SPD Tool</NavLink>
                <NavLink className="menu-btn" to="/">Blogs</NavLink>
                <NavLink className="menu-btn" to="/">Solutions</NavLink>
            </div>
        </header>
    );
};

export default Header;