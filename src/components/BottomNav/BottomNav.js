import React from 'react';

import './BottomNav.css';
import profileIcon from '../../assets/Profile_icon.png';
import vibesIcon from '../../assets/Vibes_icon.png';

export default function BottomNav({ destination, eta }) {
    return (
        <div className="BottomNav single-border">
            <img src={profileIcon} className="nav-icon" alt="profile icon" />
            <div className="nav-text">
                {destination.name ?
                    <p className="bold-weight">{destination.name}</p>
                :
                    <p className="bold-weight">{destination.street_line1}</p>
                }
                <p className="x-small">ETA: {eta}</p>
            </div>
            <img src={vibesIcon} className="nav-icon" alt="vibes icon" />
        </div>
    )
}
