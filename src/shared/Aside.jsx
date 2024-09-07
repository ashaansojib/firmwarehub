import React from 'react';
import RecentPost from '../pages/sidebar/RecentPost';
import { TopicTitle } from '../components/TopicTitle';
import Drivers from '../pages/home/Drivers';

const Aside = () => {
    return (
        <aside className='py-2 md:w-[300px] '>
            <img className='w-full cursor-pointer' src="/any-tool.png" alt="" />
            {/* recent post */}
            <TopicTitle title="Recent Posts" />
            <RecentPost />
            <Drivers />
            <div className='h-[400px] flex justify-center items-center border my-2'>
                <span>google ads here</span>
            </div>
        </aside>
    );
};

export default Aside;