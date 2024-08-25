import React from 'react';

const Comments = () => {
    return (
        <div className='py-4'>
            <h3>Comments</h3>
            {/* <div className='p-2 bg-slate-100 rounded-md'>
                <p className='text-gray-700 italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <span className='text-sm font-medium'>Asha An Sojib</span>
            </div> */}
            <form className='my-4'>
                <div className='comment'>
                    <textarea name="" id="" rows={5} className='border w-full p-2' placeholder='Write your experience...'></textarea>

                    <div className='space-y-2'>
                        <input type="text" placeholder='Your Name' className='border w-full p-2' />
                        <input type="email" placeholder='Your Email' className='border w-full p-2' />
                        <input type="submit" value="SUBMIT" className='d-btn cursor-pointer' />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Comments;