import React from 'react';
import { FaFacebookF, FaGithub, FaWhatsapp } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className='p-2 bg-slate-100'>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-between my-container'>
                <div>
                    <h3>Site Links</h3>
                    <ul className='footer-link'>
                        <li>USB Driver</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Condition</li>
                    </ul>
                </div>
                <div>
                    <h3>Popular Links</h3>
                    <ul className='footer-link'>
                        <li>Free tools</li>
                        <li>China Firmware</li>
                        <li>HalabTech Firmware</li>
                    </ul>
                </div>
                <div>
                    <h3>Connect US</h3>
                    <ul className='flex gap-3 py-4'>
                    <FaWhatsapp className='text-2xl'/>
                    <FaGithub className='text-2xl'/>
                    <FaFacebookF className='text-2xl'/>
                    </ul>
                </div>
            </div>
            <p className='text-center '>2024@ Owner by Sojib | in Bangladesh</p>
        </footer>
    );
};

export default Footer;