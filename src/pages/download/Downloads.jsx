import React from 'react';
import { Link } from 'react-router-dom';
import Comments from './Comments';
import Steps from './Steps';
import Disclaimer from './Disclaimer';

const Downloads = () => {
    return (
        <>
            {/* breadcumb tags */}
            <div className='text-sm pt-4'>
                <span><Link to="/">Home</Link> </span>
                <span className='text-secondary italic'>/ Symphony L42 Flash File HW2 SC6531E</span>
            </div>
            {/* title */}
            <h2 className='title py-1'>Symphony L42 Flash File HW2 SC6531E</h2>
            <span className='text-sm px-2 bg-orange-200'>Archive</span>
            <span className='text-sm px-2'>12 Jan, 2024</span>
            {/* description */}
            <p className='desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis voluptate quisquam ab nulla, nesciunt iste, consequatur eaque ipsa veniam deleniti, dolore aperiam at ad quasi alias? Quam doloremque odit voluptatem?</p>
            <p className='desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis voluptate quisquam ab nulla, nesciunt iste, consequatur eaque ipsa veniam deleniti, dolore aperiam at ad quasi alias? Quam doloremque odit voluptatem?</p>
            {/* features area */}
            <h3 className='font-semibold text-xl'>Features of Firmware:</h3>
            <div className='text-secondary pb-4'>
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
                    <span className='w-20'>File Link</span>
                    <span className='d-link'> - <Link to="/">Click Here</Link></span>
                </p>
                <p className='flex border-b p-2'>
                    <span className='w-20'>Drivers</span>
                    <span className='d-link'> - <Link to="/">Click Here</Link></span>
                </p>
                <p className='flex border-b p-2'>
                    <span className='w-20'>Flash Tool</span>
                    <span className='d-link'> - <Link to="/">Click Here</Link></span>
                </p>
            </div>
            {/* steps */}
            <Steps />
            {/* safety */}
            <Disclaimer />
            {/* comments */}
            <Comments />
        </>
    );
};

export default Downloads;