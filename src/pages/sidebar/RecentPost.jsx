import React from 'react';

const RecentPost = () => {
    return (
        <div>
            <article className='flex gap-2 justify-between my-4'>
                <img className='w-[110px]' src="/post-1.jpg" alt="" />
                <div>
                    <h3>Spark 5 Pro Unlock UMT MTK 2024</h3>
                    <span className='text-xs'>20 Jan, 2024</span>
                </div>
            </article>
            <article className='flex gap-2 justify-between my-4'>
                <img className='w-[110px]' src="/post-3.jpg" alt="" />
                <div>
                    <h3>Qualcomm FLash Tool With FRP Free Latest Version</h3>
                    <span className='text-xs'>20 Jan, 2024</span>
                </div>
            </article>
            <article className='flex gap-2 justify-between my-4'>
                <img className='w-[110px]' src="/post-2.jpeg" alt="" />
                <div>
                    <h3>Apple 12 Pro Max Icloud Removed Free</h3>
                    <span className='text-xs'>20 Jan, 2024</span>
                </div>
            </article>
        </div>
    );
};

export default RecentPost;