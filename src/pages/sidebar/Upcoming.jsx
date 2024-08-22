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
        <Marquee pauseOnHover={true} className='border-b'>
            {
                ads.map((ad) => <h2 className='px-4' key={ad.id}><Link to={`/download/${ad.id}`}>{ad.name}</Link></h2>)
            }
        </Marquee>
    );
};

export default Upcoming;