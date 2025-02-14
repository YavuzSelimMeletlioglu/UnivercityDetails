const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Get all courses
router.get('/:university_id', async (req, res) => {
  try {
    const {university_id} = req.params
console.log(university_id)
    const [rows] = await pool.query('SELECT * FROM faculty WHERE university_id = ?',[university_id]);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;