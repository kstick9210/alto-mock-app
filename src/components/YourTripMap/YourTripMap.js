import React from 'react';

import './YourTripMap.css';
import mapIcon from '../../assets/Map_icon.png';
import mapOverview from '../../assets/Map_overview.png';

export default function YourTripMap({ amPm, eta, tripDetails, vibeDetails }) {
    return (
        <div className="YourTripMap scroll-child" id="four">
            <div className="map-wrap">
                <img src={mapOverview} className="map" alt="map of DFW Airport" />
                <img src={mapIcon} className="map-icon" alt="map icon" />
            </div>
            <div className="info-wrap">
                <p className="gold-heading">YOUR TRIP</p>
                <div>
                    <h1 className="arrival-time grotesk-light dark-color light-weight">
                        <span className="x-large">{eta}</span> {amPm}
                    </h1>
                    <p className="x-small dark-color">Estimated arrival at {tripDetails.dropoff_location.name}</p>
                </div>
                <div className="col-wrap single-border">
                    <p className="x-small col-head">Current Vibe</p>
                    <p className="bold-weight dark-color x-small">{vibeDetails.name}</p>
                </div>
                <button className="active-button default-button">CHANGE VEHICLE VIBE</button>
            </div>
        </div>
    )
}
