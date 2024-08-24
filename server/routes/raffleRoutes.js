const express = require('express');
const router = express.Router();
const {
  createRaffle,
  getRaffles,
  getRaffleById,
  closeRaffle,
  getEntriesByRaffle,
} = require('../controllers/raffleController');
const auth = require('../middleware/auth');

router.post('/', auth, createRaffle);
router.get('/', getRaffles);
router.get('/:id', getRaffleById);
router.put('/:id/close', auth, closeRaffle);
router.get('/:id/entries', getEntriesByRaffle);

module.exports = router;
