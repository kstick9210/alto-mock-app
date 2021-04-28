import React from 'react';

import './YourTrip.css';
import editIcon from '../../assets/Edit_icon.png';
import infoIcon from '../../assets/Info_icon.png';

export default function YourTrip({ eta, tripDetails }) {
    const { dropoff_location, pickup_location } = tripDetails;
    const minFare = tripDetails.estimated_fare_min / 100;
    const maxFare = tripDetails.estimated_fare_max / 100;

    return (
        <div className="YourTrip scroll-child">
            <h1 className="linotype light-weight dark-color">Your Trip</h1>
            <div>
                <h1 className="arrival-time dark-color grotesk-light light-weight x-large">
                    {eta}
                </h1>
                <p className="x-small dark-color">Estimated arrival at {tripDetails.dropoff_location.name}</p>
            </div>
            <div className="row-wrap">
                <div className="col-wrap single-border">
                    <p className="x-small col-head">Estimated Fare:</p>
                    <p className="bold-weight">${minFare} - ${maxFare} <img src={infoIcon} alt="info" /></p>
                </div>
                <div className="col-wrap single-border">
                    <p className="x-small">Passengers:</p>
                    <p className="bold-weight">{tripDetails.passengers_min} - {tripDetails.passengers_max}</p>
                </div>
                <div className="col-wrap single-border">
                    <p className="x-small">Payment:</p>
                    <p className="bold-weight">{tripDetails.payment}</p>
                </div>
            </div>
            <div>
                {pickup_location.name && <p>{pickup_location.name}</p>}
                <p>{pickup_location.street_line1}</p>
                {pickup_location.street_line2 && <p>{pickup_location.street_line2}</p>}
                {<p>{pickup_location.city}, {pickup_location.state} {pickup_location.zipcode}</p>}
                <div className="single-border shortened-border"></div>
            </div>
            <div>
                {dropoff_location.name && <p className="bold-weight">{dropoff_location.name}</p>}
                <p className="bold-weight">{dropoff_location.street_line1}</p>
                {dropoff_location.street_line2 && <p className="bold-weight">{dropoff_location.street_line2}</p>}
                {<p className="bold-weight">{dropoff_location.city}, {dropoff_location.state} {dropoff_location.zipcode}</p>}
            </div>
            <p className="trip-notes">
                {tripDetails.notes}&nbsp;&nbsp;
                <img src={editIcon} alt="edit icon" />
            </p>
            <button className="default-button" disabled>CANCEL TRIP</button>
        </div>
    )
}
