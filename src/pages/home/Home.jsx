import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className='flex gap-2 items-center'>
                <input type="text" placeholder='Find Your Files...' className='border py-1 px-3 w-full rounded-md' />
                <button className='default-btn'>Brand</button>
                <button className='default-btn'>Models</button>
                <button className='default-btn'>Countries</button>
            </div>
            {/* files area */}
            <div className='post'>
                <h3 className='font-medium pb-2 text-xl'>Oppo F21s EFS Reset Firmware v12.3.00</h3>
                <div className='space-x-1 text-sm'>
                    <span className=' px-2 text-white bg-red-400'>Paid</span>
                    {/* <span className='text-sm px-2 text-white bg-green-400'>Free</span> */}
                    <span className='px-2 bg-green-50'>1.9 GB</span>
                    <span className='px-2 bg-orange-50'>Chipset</span>
                    <span className='px-2 bg-gray-50'>Jan 2024</span>
                </div>
                <Link to="/download/1" className='d-btn'>DOWNLOAD</Link>
            </div>
            <div className='post'>
                <h3 className='font-medium pb-4 text-xl'>Symphony L42 Flash File HW2 SC6531E</h3>
                <div className='space-x-1 text-sm'>
                    <span className=' px-2 text-white bg-red-400'>Paid</span>
                    {/* <span className='text-sm px-2 text-white bg-green-400'>Free</span> */}
                    <span className='px-2 bg-green-50'>1.9 GB</span>
                    <span className='px-2 bg-orange-50'>Chipset</span>
                    <span className='px-2 bg-gray-50'>Jan 2024</span>
                </div>
                <Link to="/download/2" className='d-btn'>DOWNLOAD</Link>
            </div>
            <div className='post'>
                <h3 className='font-medium pb-4 text-xl'>Xiaomi Note 9 Flash File MT6765</h3>
                <div className='space-x-1 text-sm'>
                    <span className=' px-2 text-white bg-red-400'>Paid</span>
                    {/* <span className='text-sm px-2 text-white bg-green-400'>Free</span> */}
                    <span className='px-2 bg-green-50'>1.9 GB</span>
                    <span className='px-2 bg-orange-50'>Chipset</span>
                    <span className='px-2 bg-gray-50'>Jan 2024</span>
                </div>
                <Link to="/download/2" className='d-btn'>DOWNLOAD</Link>
            </div>
            <div className='post'>
                <h3 className='font-medium pb-4 text-xl'>Bravo B901 Flash File SC6531E</h3>
                <div className='space-x-1 text-sm'>
                    {/* <span className=' px-2 text-white bg-red-400'>Paid</span> */}
                    <span className='text-sm px-2 text-white bg-green-400'>Free</span>
                    <span className='px-2 bg-green-50'>1.9 GB</span>
                    <span className='px-2 bg-orange-50'>Chipset</span>
                    <span className='px-2 bg-gray-50'>Jan 2024</span>
                </div>
                <Link to="/download/2" className='d-btn'>DOWNLOAD</Link>
            </div>
            <div className='post'>
                <h3 className='font-medium pb-4 text-xl'>Lava Benco P30 Flash File HW2 SC6531E</h3>
                <div className='space-x-1 text-sm'>
                    <span className=' px-2 text-white bg-red-400'>Paid</span>
                    {/* <span className='text-sm px-2 text-white bg-green-400'>Free</span> */}
                    <span className='px-2 bg-green-50'>1.9 GB</span>
                    <span className='px-2 bg-orange-50'>Chipset</span>
                    <span className='px-2 bg-gray-50'>Jan 2024</span>
                </div>
                <Link to="/download/2" className='d-btn'>DOWNLOAD</Link>
            </div>
            <div className='post'>
                <h3 className='font-medium pb-4 text-xl'>Tinmo F21 Flash File MT6261DA</h3>
                <div className='space-x-1 text-sm'>
                    <span className=' px-2 text-white bg-red-400'>Paid</span>
                    {/* <span className='text-sm px-2 text-white bg-green-400'>Free</span> */}
                    <span className='px-2 bg-green-50'>1.9 GB</span>
                    <span className='px-2 bg-orange-50'>Chipset</span>
                    <span className='px-2 bg-gray-50'>Jan 2024</span>
                </div>
                <Link to="/download/2" className='d-btn'>DOWNLOAD</Link>
            </div>
            <div className='post'>
                <h3 className='font-medium pb-4 text-xl'>Itel IT2127 Flash File HW2 SC6531E</h3>
                <div className='space-x-1 text-sm'>
                    {/* <span className=' px-2 text-white bg-red-400'>Paid</span> */}
                    <span className='text-sm px-2 text-white bg-green-400'>Free</span>
                    <span className='px-2 bg-green-50'>1.9 GB</span>
                    <span className='px-2 bg-orange-50'>Chipset</span>
                    <span className='px-2 bg-gray-50'>Jan 2024</span>
                </div>
                <Link to="/download/2" className='d-btn'>DOWNLOAD</Link>
            </div>
        </div>
    );
};

export default Home;