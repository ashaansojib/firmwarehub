import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import DashboardAside from '../pages/dashboard/DashboardAside';

const Dashboard = () => {
    const router = useLocation();
    console.log(router.pathname);
    return (
        <section>
            <div className='flex gap-4'>
                <DashboardAside />
                <div>
                    <header>Hello bara</header>
                    {
                        router.pathname === '/admin' ? <h2>Main Dashobad of home</h2> : <Outlet />
                    }
                </div>
            </div>
        </section>
    );
};

export default Dashboard;