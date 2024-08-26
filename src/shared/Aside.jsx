import React from 'react';
import RecentPost from '../pages/sidebar/RecentPost';

const Aside = () => {
    return (
        <aside className='py-2 md:w-[300px] '>
            <img className='w-full cursor-pointer' src="/any-tool.png" alt="" />
            {/* recent post */}
            <p className='py-1 italic font-medium border-b'>Recent Blogs</p>
            <RecentPost />
            <div className='h-[400px] flex justify-center items-center border my-2'>
                <span>google ads here</span>
            </div>
        </aside>
    );
};

export default Aside;