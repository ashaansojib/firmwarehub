import React from 'react';
import { Link } from 'react-router-dom';

const RecentPost = () => {
    return (
        <div className='text-secondary'>
            <article className='flex gap-2 my-2'>
                <img className='w-[110px]' src="/post-1.jpg" alt="" />
                <div>
                    <Link><h3>Spark 5 Pro Unlock UMT MTK 2024</h3></Link>
                    <span className='text-xs'>20 Jan, 2024</span>
                </div>
            </article>
            <article className='flex gap-2 between my-2'>
                <img className='w-[110px]' src="/post-3.jpg" alt="" />
                <div>
                    <Link><h3>Qualcomm FLash Tool With FRP Free Latest Version</h3></Link>
                    <span className='text-xs'>20 Jan, 2024</span>
                </div>
            </article>
            <article className='flex gap-2 between my-2'>
                <img className='w-[110px]' src="/post-2.jpeg" alt="" />
                <div>
                    <Link to="/"><h3>Apple 12 Pro Max Icloud Removed Free</h3></Link>
                    <span className='text-xs'>20 Jan, 2024</span>
                </div>
            </article>
        </div>
    );
};

export default RecentPost;