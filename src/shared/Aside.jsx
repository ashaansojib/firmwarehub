import React from 'react';
import Upcoming from '../pages/sidebar/Upcoming';
import RecentPost from '../pages/sidebar/RecentPost';

const Aside = () => {
    return (
        <aside className=''>
            <Upcoming />
            <img src="/poster.png" alt="" />
            <div className='h-[400px] flex justify-center items-center border my-2'>
                <span>google ads here</span>
            </div>

            {/* recent post */}
            <RecentPost />
        </aside>
    );
};

export default Aside;