import { useEffect, useState } from 'react';
import axios from 'axios';
import Scrollspy from 'react-scrollspy'

import './App.css';
import altoLogo from './assets/Alto_logo.png';
import YourTrip from './components/YourTrip/YourTrip';
import YourDriver from './components/YourDriver/YourDriver';
import YourVehicle from './components/YourVehicle/YourVehicle';
import YourTripMap from './components/YourTripMap/YourTripMap';
import BottomNav from './components/BottomNav/BottomNav';

export default function App() {
  const [localEta, setLocalEta] = useState("");
  const [ amPm, setAmPm ] = useState("");
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
    let time = new Date(eta);
    time = time.toLocaleTimeString([], { timeStyle: 'short' });
    setLocalEta(time.slice(0, time.length - 3));
    setAmPm(time.slice(time.length - 2));
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
            <Scrollspy
              className="kabob-nav"
              currentClassName="is-current"
              items={['one', 'two', 'three', 'four']}
            >
              <li className="nav-item"><a href="#one">one</a></li>
              <li className="nav-item"><a href="#two">two</a></li>
              <li className="nav-item"><a href="#three">three</a></li>
              <li className="nav-item"><a href="#four">four</a></li>
            </Scrollspy>

            <YourTrip 
              amPm={amPm}
              eta={localEta}
              tripDetails={tripDetails}
              />
            <YourDriver driverDetails={driverDetails} />
            <YourVehicle vehicleDetails={vehicleDetails} />
            <YourTripMap 
              amPm={amPm}
              eta={localEta}
              tripDetails={tripDetails}
              vibeDetails={vibeDetails}
            />
          </div>
          <BottomNav 
            amPm={amPm}
            eta={localEta}
            destination={tripDetails.dropoff_location}
          />
        </>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
