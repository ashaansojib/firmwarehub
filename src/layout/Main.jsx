import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../shared/Header';
import Aside from '../shared/Aside';

const Main = () => {
    return (
        <div className='my-container'>
            <Header />
            <div className='grid grid-cols-3 justify-between gap-3 relative'>
                <div className='sticky top-0 left-0'>
                <Aside />
                </div>
                <div className='col-span-2 p-2'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Main;