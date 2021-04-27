import React from 'react';

import './YourTrip.css';
import editIcon from '../../assets/Edit_icon.png';

export default function YourTrip({ tripDetails }) {
    const { dropoff_location, pickup_location } = tripDetails;

    return (
        <>
        {tripDetails ? (
        <div>
            <h1>Your Trip</h1>
            <h1>{tripDetails.estimated_arrival}</h1>
            <p>Estimated arrival at {tripDetails.dropoff_location.name}</p>
            <hr />
            <div className="row-wrap">
                <div className="col-wrap">
                    <p>Estimated Fare:</p>
                    <p>${tripDetails.estimated_fare_min} - ${tripDetails.estimated_fare_max}</p>
                </div>
                <div className="col-wrap">
                    <p>Passengers:</p>
                    <p>{tripDetails.passengers_min} - {tripDetails.passengers_max}</p>
                </div>
                <div className="col-wrap">
                    <p>Payment:</p>
                    <p>{tripDetails.payment}</p>
                </div>
            </div>
            <div>
                {pickup_location.name && <p>{pickup_location.name}</p>}
                <p>{pickup_location.street_line1}</p>
                {pickup_location.street_line2 && <p>{pickup_location.street_line2}</p>}
                {<p>{pickup_location.city}, {pickup_location.state} {pickup_location.zipcode}</p>}
            </div>
            <hr />
            <div>
                {dropoff_location.name && <p>{dropoff_location.name}</p>}
                <p>{dropoff_location.street_line1}</p>
                {dropoff_location.street_line2 && <p>{dropoff_location.street_line2}</p>}
                {<p>{dropoff_location.city}, {dropoff_location.state} {dropoff_location.zipcode}</p>}
            </div>
            <p>{tripDetails.notes} <img src={editIcon}/></p>
        </div>
        ) : (
            <div>Loading</div>
        )}
        </>
    )
}
