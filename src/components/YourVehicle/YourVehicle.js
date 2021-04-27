import React from 'react';

import './YourVehicle.css';

export default function YourVehicle({ vehicleDetails }) {
    return (
        <div className="YourVehicle">
            <div style={{
                background: `url(${vehicleDetails.image}) no-repeat center`,
                gridRow: 1/2,
                height: '45vh'
            }}></div>
            <div className="vehicle-info-wrap">
                <div>
                    <p className="gold-heading">Your Vehicle</p>
                    <p className="dark-color grotesk-light x-large">{vehicleDetails.license}</p>
                    <div className="row-wrap">
                        <div className="col-wrap single-border">
                            <p className="x-small col-head">Make / Model</p>
                            <p className="bold-weight dark-color x-small">{vehicleDetails.make}</p>
                        </div>
                        <div className="col-wrap single-border">
                            <p className="x-small col-head">Color</p>
                            <p className="bold-weight dark-color x-small"> {vehicleDetails.color}</p>
                        </div>
                    </div>
                </div>
                <button className="default-button" disabled>IDENTIFY VEHICLE</button>
            </div>
        </div>
    )
}
