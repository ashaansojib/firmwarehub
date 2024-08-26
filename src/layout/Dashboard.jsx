import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import DashboardAside from '../pages/dashboard/DashboardAside';
import DashboardHeader from '../pages/dashboard/DashboardHeader';

const Dashboard = () => {
    const router = useLocation();
    console.log(router.pathname);
    return (
        <section className='flex justify-between'>
            <DashboardAside />
            <div className='w-full'>
                <DashboardHeader />
                {
                    router.pathname === '/admin' ? <h2>Main Dashobad of home</h2> : <Outlet />
                }
            </div>
        </section>
    );
};

export default Dashboard;