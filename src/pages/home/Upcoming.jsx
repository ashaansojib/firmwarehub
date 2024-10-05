import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const Upcoming = () => {
    const [ads, setAds] = useState([]);
    useEffect(() => {
        fetch("/data/marquee.json")
            .then(res => res.json())
            .then(data => setAds(data))
    }, []);
    return (
        <Marquee pauseOnHover={true} className='mb-2'>
            { 
                ads.map((ad) => <h3 className='px-4 underline text-primary' key={ad.id}><Link to={`/download/${ad.id}`}>{ad.name}</Link></h3>)
            }
        </Marquee>
    );
};

export default Upcoming;