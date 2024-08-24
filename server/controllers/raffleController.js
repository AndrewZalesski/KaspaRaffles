const Raffle = require('../models/Raffle');
const Entry = require('../models/Entry');

exports.createRaffle = async (req, res) => {
  const { name, description, startTime, endTime, minimumEntry, walletAddress } = req.body;
  try {
    const raffle = new Raffle({
      name,
      description,
      startTime,
      endTime,
      minimumEntry,
      walletAddress,
    });
    await raffle.save();
    res.json(raffle);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getRaffles = async (req, res) => {
  try {
    const raffles = await Raffle.find();
    res.json(raffles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getRaffleById = async (req, res) => {
  try {
    const raffle = await Raffle.findById(req.params.id);
    if (!raffle) {
      return res.status(404).json({ msg: 'Raffle not found' });
    }
    res.json(raffle);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.closeRaffle = async (req, res) => {
  try {
    const raffle = await Raffle.findById(req.params.id);
    if (!raffle) {
      return res.status(404).json({ msg: 'Raffle not found' });
    }
    raffle.status = 'CLOSED';
    await raffle.save();
    res.json(raffle);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getEntriesByRaffle = async (req, res) => {
  try {
    const entries = await Entry.find({ raffle: req.params.id });
    res.json(entries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
