import React from 'react';
import Upcoming from '../pages/sidebar/Upcoming';

const Aside = () => {
    return (
        <aside>
            <Upcoming />
            <img src="/poster.png" alt="" />
            <div className='h-[400px] flex justify-center items-center bg-slate-50'>
                <span>google ads here</span>
            </div>
        </aside>
    );
};

export default Aside;