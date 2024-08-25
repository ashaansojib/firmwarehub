import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="/"><h2 className='title'>Software & Firmware</h2></Link>
            <div>
                <NavLink className="menu-btn" to="/">Home</NavLink>
                <NavLink className="menu-btn" to="/sp-tools">SP Tool</NavLink>
                <NavLink className="menu-btn" to="/spd-tools">SPD Tool</NavLink>
                <NavLink className="menu-btn" to="/blogs">Blogs</NavLink>
                <NavLink className="menu-btn" to="/">Solutions</NavLink>
            </div>
        </header>
    );
};

export default Header;