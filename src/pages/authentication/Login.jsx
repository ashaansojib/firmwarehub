import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaFacebookF, FaGoogle } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section className='middle-container'>
            <div className='middle-content w-[450px]'>
                <Link to="/"><h2>SoftFirm.com</h2></Link>
                <form>
                    <div className='py-2'>
                        <p>Email Address</p>
                        <input type="email" placeholder='Your Email' name="" id="" />
                    </div>
                    <div className='py-2'>
                        <p>Password</p>
                        <input type="password" placeholder='Enter Password' name="" id="" />
                    </div>
                    <span className='inline-block text-accent pb-2'>Forget Password?</span>
                    <input type="submit" value="Login" className='d-active' />
                </form>
                <p className='text-center pt-4'>Or</p>
                <div className='flex gap-4 justify-center py-4'>
                    <Link><FaGithub className='text-2xl' /></Link>
                    <Link><FaGoogle className='text-2xl' /></Link>
                    <Link><FaFacebookF className='text-2xl' /></Link>
                </div>
                <p className='text-center pt-2'>Don't have any account? <Link className='inline-block text-accent'>Register</Link> </p>
            </div>
        </section>
    );
};

export default Login;