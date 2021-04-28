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
  const [localEta, setLocalEta] = useState("")
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
      convertEtaToLocalTime(response.data.trip.estimated_arrival)
    });
  }

  function convertEtaToLocalTime(eta) {
    const time = new Date(eta);
    setLocalEta(time.toLocaleTimeString([], { timeStyle: 'short' }));
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
            <YourTrip 
              eta={localEta}
              tripDetails={tripDetails}
              />
            <YourDriver driverDetails={driverDetails} />
            <YourVehicle vehicleDetails={vehicleDetails} />
            <YourTripMap 
              eta={localEta}
              tripDetails={tripDetails}
              vibeDetails={vibeDetails}
            />
          </div>
          <BottomNav 
            destination={tripDetails.dropoff_location}
            eta={localEta}
          />
        </>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
