import React from 'react';
import Upcoming from '../pages/sidebar/Upcoming';

const Aside = () => {
    return (
        <aside className='border'>
            <h2 className='p-2 font-bold'>Popular...</h2>
            <Upcoming />
        </aside>
    );
};

export default Aside;