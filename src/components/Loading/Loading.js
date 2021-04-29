import React from 'react';

import './Loading.css';
import destination from '../../assets/Destination_big.png';

export default function Loading() {
    return (
        <div className="Loading">
            <h1 className="linotype light-weight large">
                Retrieving your ride...
                <img src={destination} alt="Alto branded map pin"/>
            </h1>
        </div>
    )
}
