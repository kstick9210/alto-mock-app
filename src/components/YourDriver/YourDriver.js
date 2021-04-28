import React from 'react';

import './YourDriver.css';

export default function YourDriver({ driverDetails }) {
    return (
        <div className="YourDriver scroll-child">
            <div 
                style={{
                    background: `url(${driverDetails.image}) no-repeat 45% 25%`,
                    gridRow: 1/2,
                    height: '25em',
                }}
            ></div>
            <div className="driver-info-wrap">
                <div className="driver-text-wrap">
                    <p className="gold-heading">YOUR DRIVER</p>
                    <p className="dark-color grotesk-light x-large">{driverDetails.name}</p>
                    <div className="single-border shortened-border"></div>
                    <p className="x-small">{driverDetails.bio}</p>
                </div>
                <div className="button-wrap">
                    <button className="default-button" disabled>CONTACT DRIVER</button>
                </div>
            </div>
        </div>
    )
}
