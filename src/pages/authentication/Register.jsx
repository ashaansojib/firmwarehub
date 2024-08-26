import { Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <section className='middle-container'>
            <div className='middle-content w-[450px]'>
                <Link to="/"><h2>SoftFirm.com</h2></Link>
                <form>
                    <div className='py-2'>
                        <p>Full Name</p>
                        <input type="email" placeholder='Your Name' name="" id="" />
                    </div>
                    <div className='py-2'>
                        <p>Email Address</p>
                        <input type="email" placeholder='Your Email' name="" id="" />
                    </div>
                    <div className='py-2'>
                        <p>Password</p>
                        <input type="password" placeholder='Enter Password' name="" id="" />
                    </div>
                    <FormControlLabel control={<Checkbox />} label="Accept Terms & Conditions" />
                    <input type="submit" value="Register" className='d-active' />
                </form>
                <p className='text-center pt-4'>Or</p>
                <div className='flex gap-4 justify-center py-4'>
                    <Link><FaGithub className='text-2xl' /></Link>
                    <Link><FaGoogle className='text-2xl' /></Link>
                    <Link><FaFacebookF className='text-2xl' /></Link>
                </div>
                <p className='text-center pt-2'>Already have account? <Link to="/user/login" className='inline-block text-accent'>Login</Link> </p>
            </div>
        </section>
    );
};

export default Register;