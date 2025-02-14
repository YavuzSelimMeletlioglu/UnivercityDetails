const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Get all courses
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM university');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;