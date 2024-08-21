import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='flex justify-between items-center p-2 bg-slate-50'>
            <h2 className='title'>All Tested Firmware</h2>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/sp-tools">SP Tool</NavLink>
                <NavLink to="/spd-tools">SPD Tool</NavLink>
                <NavLink to="/">Blogs</NavLink>
                <NavLink to="/">Solutions</NavLink>
            </div>
        </header>
    );
};

export default Header;