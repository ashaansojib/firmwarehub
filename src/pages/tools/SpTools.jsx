import React from 'react';
import Steps from '../download/Steps';
import Disclaimer from '../download/Disclaimer';
import { Link } from 'react-router-dom';

const SpTools = () => {
    return (
        <div className='py-2'>
            <h3 className='text-xl font-semibold text-primary'>Major Version of SPD Flash Tools Free.</h3>
            <p className='text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum tempora itaque, non ullam molestias odio earum. Officiis, fugiat rerum fugit beatae eos id ut, quam numquam inventore veritatis, libero cum.</p>
            <p className='text-secondary py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum tempora itaque, non ullam molestias odio earum. Officiis, fugiat rerum fugit beatae eos id ut, quam numquam inventore veritatis, libero cum.</p>
            <h3 className='font-semibold text-xl'>Features of SPD Tool:</h3>
            <div className='text-secondary pb-4'>
                <p className='border-b p-2 flex'>
                    <span className='w-20'>Name</span>
                    <span className='italic'> - SPD Flash Tool</span>
                </p>
                <p className='flex border-b p-2'>
                    <span className='w-20'>Category</span>
                    <span className='italic'> - Upgrade/Facroty</span>
                </p>
                <p className='flex border-b p-2'>
                    <span className='w-20'>Supports</span>
                    <span className='italic'> - MT6251,MT6752,MT6272 ETC</span>
                </p>
                <p className='flex border-b p-2'>
                    <span className='w-20'>Tool Link</span>
                    <span className='d-link'> - <Link to="/">SP_Flash_Tool_v5.1736_Win.rar</Link></span>
                </p>
                <p className='flex border-b p-2'>
                    <span className='w-20'>Tool Link</span>
                    <span className='d-link'> - <Link to="/">SP_Flash_Tool_v5.1724_Win.rar</Link></span>
                </p>
            </div>
            {/* TODO */}
            <Steps />
            <Disclaimer />
        </div>
    );
};

export default SpTools;