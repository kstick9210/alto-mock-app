import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import YourTrip from './components/YourTrip/YourTrip';

export default function App() {
  const [ rideDetails, setRideDetails ] = useState("");

  const getRideDetails = () => {
    axios.get("http://localhost:3000/mission.json")
    .then(response => setRideDetails(response.data));
  }

  useEffect(() => {
    getRideDetails();
  }, [])

  return (
    <div className="App">
      <YourTrip />
    </div>
  );
}
