import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RaffleDetail = () => {
  const { id } = useParams();
  const [raffle, setRaffle] = useState(null);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchRaffle = async () => {
      try {
        const res = await axios.get(`/api/raffles/${id}`);
        setRaffle(res.data);
      } catch (err) {
        console.error(err.message);
      }
    };

    const fetchEntries = async () => {
      try {
        const res = await axios.get(`/api/raffles/${id}/entries`);
        setEntries(res.data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchRaffle();
    fetchEntries();
  }, [id]);

  if (!raffle) return <div>Loading...</div>;

  return (
    <div>
      <h1>{raffle.name}</h1>
      <p>{raffle.description}</p>
      <p>Status: {raffle.status}</p>
      <h2>Entries</h2>
      <ul>
        {entries.map((entry) => (
          <li key={entry._id}>
            <p>Wallet: {entry.senderWalletAddress}</p>
            <p>Amount: {entry.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RaffleDetail;
