import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import YourTrip from './components/YourTrip/YourTrip';

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
      <YourTrip tripDetails={tripDetails} />
    </div>
  );
}
