import React from 'react';
import { FaFacebookF, FaGithub, FaWhatsapp } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className='text-secondary bg-primary'>
            <div className='p-2 grid grid-cols-1 md:grid-cols-3 justify-between my-container border-b'>
                <div>
                    <p>Site Links</p>
                    <ul className='footer-link'>
                        <li>USB Driver</li>
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
            </div>
            <p className='text-center py-4 '>2024@ Owner by Sojib | in Bangladesh</p>
        </footer>
    );
};

export default Footer;