import React from 'react';

const Comments = () => {
    return (
        <div className='py-4'>
            <h4>Comments</h4>
            <div className='p-2 bg-slate-100 rounded-md'>
                <p className='text-gray-700 italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <span className='text-sm font-medium'>Asha An Sojib</span>
            </div>
            <form className='my-4'>
                <textarea name="" id="" className='border w-full p-2' placeholder='Write your experience...'></textarea>
                <div className='flex justify-between gap-4'>
                    <input type="text" placeholder='Your Name' className='border w-full p-2' />
                    <input type="email" placeholder='Your Email' className='border w-full p-2' />
                </div>
                <input type="submit" value="Posted" className='default-btn' />
            </form>
        </div>
    );
};

export default Comments;