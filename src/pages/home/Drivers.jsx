import React from 'react';
import { TopicTitle } from '../../components/TopicTitle';
import { Link } from 'react-router-dom';

const Drivers = () => {
    return (
        <div className='aside-item'>
            <TopicTitle title="Update Tools & Drivers" />
            <Link to="/blogs" className='underline py-1 block'>Download Miracle USB Driver 1.2 Free</Link>
            <Link to="/blogs" className='underline py-1 block'>Download Samsung USB Driver latese</Link>
            <Link to="/blogs" className='underline py-1 block'>Download Adb driver latest version Free</Link>
        </div>
    );
};

export default Drivers;