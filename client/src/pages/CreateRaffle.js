import React, { useState } from 'react';
import axios from 'axios';

const CreateRaffle = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    startTime: '',
    endTime: '',
    minimumEntry: 0,
    walletAddress: '',
  });

  const { name, description, startTime, endTime, minimumEntry, walletAddress } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/raffles', formData);
      console.log('Raffle created:', res.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <h1>Create a New Raffle</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={name} onChange={onChange} required />
        </div>
        <div>
          <label>Description</label>
          <textarea name="description" value={description} onChange={onChange} />
        </div>
        <div>
          <label>Start Time</label>
          <input type="datetime-local" name="startTime" value={startTime} onChange={onChange} required />
        </div>
        <div>
          <label>End Time</label>
          <input type="datetime-local" name="endTime" value={endTime} onChange={onChange} required />
        </div>
        <div>
          <label>Minimum Entry Amount</label>
          <input type="number" name="minimumEntry" value={minimumEntry} onChange={onChange} required />
        </div>
        <div>
          <label>Kaspa Wallet Address</label>
          <input type="text" name="walletAddress" value={walletAddress} onChange={onChange} required />
        </div>
        <button type="submit">Create Raffle</button>
      </form>
    </div>
  );
};

export default CreateRaffle;
