import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    const [open, setOpen] = useState(true);

    const navBar = <>

        <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to="/sp-tools">SP Tool</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to="/spd-tools">SPD Tool</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to="/blogs">Blogs</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to="/as">Solutions</NavLink>
    </>
    return (
        <header>
            <div className="my-container flex justify-between items-center ">
                <Link to="/"><h2>SoftFirm.com</h2></Link>

                <svg onClick={() => setOpen(!open)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 md:hidden cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                <div className="md:block hidden">
                    {
                        navBar
                    }
                </div>
            </div>
            <div className={`${open ? 'block md:hidden' : 'hidden'}`}>
                {
                    navBar
                }
            </div>
        </header>
    );
};

export default Header;