import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../shared/Header';
import Aside from '../shared/Aside';
import Footer from '../shared/Footer';

const Main = () => {
    return (
        <div className='my-container'>
            <Header />
            <div className='grid grid-cols-3 justify-between gap-3'>
                <div className="sticky top-0 left-0 z-10">
                    <Aside />
                </div>
                <div className='col-span-2 p-2'>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Main;