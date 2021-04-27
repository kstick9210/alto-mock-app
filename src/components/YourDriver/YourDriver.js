import React from 'react';

import './YourDriver.css';

export default function YourDriver({ driverDetails }) {
    return (
        <div className="YourDriver">
            <div style={{
                background: `url(${driverDetails.image}) no-repeat 45% 25%`,
                gridRow: 1/2,
                height: '45vh'
            }}></div>
            <div className="driver-info-wrap">
                <p className="gold-heading">YOUR DRIVER</p>
                <p className="dark-color light-weight x-large">{driverDetails.name}</p>
                <p className="x-small">{driverDetails.bio}</p>
                <button className="default-button" disabled>CONTACT DRIVER</button>
            </div>
        </div>
    )
}