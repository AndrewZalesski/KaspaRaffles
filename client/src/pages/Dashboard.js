import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [raffles, setRaffles] = useState([]);

  useEffect(() => {
    const fetchRaffles = async () => {
      try {
        const res = await axios.get('/api/raffles');
        setRaffles(res.data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchRaffles();
  }, []);

  return (
    <div>
      <h1>Your Raffles</h1>
      <ul>
        {raffles.map((raffle) => (
          <li key={raffle._id}>
            <h2>{raffle.name}</h2>
            <p>{raffle.description}</p>
            <p>Status: {raffle.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
