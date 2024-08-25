import React from 'react';

const Steps = () => {
    return (
        <div className='p-4 bg-primary'>
            <h3>Guidelines:</h3>
            <ul className='space-y-4'>
                <li><span className='steps'>1</span> First you have download the firmware.</li>
                <li><span className='steps'>2</span> Open the tool that you want to use.</li>
                <li><span className='steps'>3</span> Select your dowwnloaded firmware</li>
                <li><span className='steps'>4</span> Select Opearation that you want to run</li>
                <li><span className='steps'>5</span> When finished reboot the mobile.</li>
            </ul>
        </div>
    );
};

export default Steps;