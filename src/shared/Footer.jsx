import React from 'react';
import { FaFacebookF, FaGithub, FaWhatsapp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='text-secondary bg-slate-100'>
            {/* <div className='p-2 grid grid-cols-1 md:grid-cols-3 justify-between my-container border-b'>
                <div>
                    <p>Site Links</p>
                    <ul className='footer-link'>
                        <Link to="/">USB Driver</Link>
                        <li>Privacy Policy</li>
                        <li>Terms & Condition</li>
                    </ul>
                </div>
                <div>
                    <p>Popular Links</p>
                    <ul className='footer-link'>
                        <li>Free tools</li>
                        <li>China Firmware</li>
                        <li>HalabTech Firmware</li>
                    </ul>
                </div>
                <div>
                    <p>Connect US</p>
                    <ul className='flex gap-3 py-4'>
                    <FaWhatsapp className='text-2xl'/>
                    <FaGithub className='text-2xl'/>
                    <FaFacebookF className='text-2xl'/>
                    </ul>
                </div>
            </div> */}
            <p className='text-center py-4 text-sm'>2024@ Develop by <Link to="https://www.facebook.com/khusbusojib/" target='_blank' className='underline'>Sojib</Link> | in Bangladesh</p>
        </footer>
    );
};

export default Footer;