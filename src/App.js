import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import altoLogo from './assets/Alto_logo.png';
import YourTrip from './components/YourTrip/YourTrip';
import YourDriver from './components/YourDriver/YourDriver';
import YourVehicle from './components/YourVehicle/YourVehicle';
import YourTripMap from './components/YourTripMap/YourTripMap';
import BottomNav from './components/BottomNav/BottomNav';

export default function App() {
  const [tripDetails, setTripDetails] = useState("");
  const [driverDetails, setDriverDetails] = useState("");
  const [vehicleDetails, setVehicleDetails] = useState("");
  const [vibeDetails, setVibeDetails] = useState("");

  const getRideDetails = () => {
    axios.get("http://localhost:3000/mission.json")
    .then(response => {
      setTripDetails(response.data.trip);
      setDriverDetails(response.data.driver);
      setVehicleDetails(response.data.vehicle);
      setVibeDetails(response.data.vibe);
    });
  }

  useEffect(() => {
    getRideDetails();
  }, [])

  return (
    <div className="App">
      <img src={altoLogo} className="alto-logo" alt="Alto"/>
      {tripDetails ? (
        <>
          <div className="scroll-container">
            <YourTrip tripDetails={tripDetails} />
            <YourDriver driverDetails={driverDetails} />
            <YourVehicle vehicleDetails={vehicleDetails} />
            <YourTripMap 
              tripDetails={tripDetails}
              vibeDetails={vibeDetails}
            />
          </div>
          <BottomNav 
            destination={tripDetails.dropoff_location}
            eta={tripDetails.estimated_arrival}
          />
        </>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
