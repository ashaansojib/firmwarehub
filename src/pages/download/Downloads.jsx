import React from 'react';
import { Link } from 'react-router-dom';

const Downloads = () => {
    return (
        <div>
            <div className='text-sm'>
                <span><Link to="/">Home</Link> </span>
                <span className='text-gray-400'>/ Symphony L42 Flash File HW2 SC6531E</span>
            </div>
            <h2 className='text-2xl font-bold'>Symphony L42 Flash File HW2 SC6531E</h2>
            <span className='text-sm px-2 bg-orange-200'>Archive</span>
            <span className='text-sm px-2'>12 Jan, 2024</span>

            <p className='text-gray-700 py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis voluptate quisquam ab nulla, nesciunt iste, consequatur eaque ipsa veniam deleniti, dolore aperiam at ad quasi alias? Quam doloremque odit voluptatem?</p>
            <p className='text-gray-700 py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis voluptate quisquam ab nulla, nesciunt iste, consequatur eaque ipsa veniam deleniti, dolore aperiam at ad quasi alias? Quam doloremque odit voluptatem?</p>
            <h3 className='font-semibold text-xl'>Features & Info:</h3>
            <div className='text-gray-700'>
                <p className='border-b p-2 flex'>
                    <span className='w-20'>Brand</span>
                    <span className='italic'> - Symphony</span>
                </p>
                <p className='flex border-b p-2'>
                    <span className='w-20'>Model</span>
                    <span className='italic'> - L43</span>
                </p>
                <p className='flex border-b p-2'>
                    <span className='w-20'>Chipset</span>
                    <span className='italic'> - SC6531E</span>
                </p>
                <p className='flex border-b p-2'>
                    <span className='w-20'>FileName</span>
                    <span className='italic'> - Symphony_l34_hw5_202312</span>
                </p>
                <p className='flex border-b p-2'>
                    <span className='w-20'>Size</span>
                    <span className='italic'> - 3.90MB</span>
                </p>
                <p className='flex border-b p-2'>
                    <span className='w-20'>Price</span>
                    <span className='italic'> - 50Tk.</span>
                </p>
                <p className='flex border-b p-2'>
                    <span className='w-20'>Password</span>
                    <span className='italic'> - Paid</span>
                </p>
                <p className='flex border-b p-2'>
                    <span className='w-20'>Link</span>
                    <span className='d-link'> - <Link to="/">Click Here</Link></span>
                </p>
                <p className='flex border-b p-2'>
                    <span className='w-20'>Flash Tool</span>
                    <span className='d-link'> - <Link to="/">Click Here</Link></span>
                </p>
            </div>
            <div className='py-4'>
                <h3 className='font-semibold text-xl'>Guidelines:</h3>
                <ul>
                    <li>1. First you have download the firmware.</li>
                    <li>2. Open the tool that you want to use.</li>
                    <li>3. Select your dowwnloaded firmware</li>
                    <li>4. Select Opearation that you want to run</li>
                    <li>5. When finished reboot the mobile.</li>
                </ul>
            </div>
            <div>
                <h4>Comments</h4>
                <div className='p-2 bg-slate-100 rounded-md'>
                    <p className='text-gray-700 italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <span className='text-sm font-medium'>Asha An Sojib</span>
                </div>
                <form className='my-4'>
                    <textarea name="" id="" className='border w-full p-2' placeholder='Write your experience...'></textarea>
                    <input type="text" placeholder='Your Name' className='border w-full p-2' />
                    <input type="email" placeholder='Your Email' className='border w-full p-2' />
                    <input type="submit" value="Posted" className='default-btn' />
                </form>
            </div>
        </div>
    );
};

export default Downloads;