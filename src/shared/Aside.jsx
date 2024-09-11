import React from 'react';
import RecentPost from '../pages/sidebar/RecentPost';
import Drivers from '../pages/home/Drivers';

const Aside = () => {
    return (
        <aside className='py-2 md:w-[300px] space-y-4'>
            <img className='w-full cursor-pointer' src="/any-tool.png" alt="" />
            {/* recent post */}
            <RecentPost />
            <Drivers />
            <div className='h-[400px] flex justify-center items-center aside-item'>
                <span>google ads here</span>
            </div>
        </aside>
    );
};

export default Aside;