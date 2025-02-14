const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Get all courses
router.get('/:faculty_id', async (req, res) => {
  try {
    const {faculty_id} = req.params
console.log(faculty_id)
    const [rows] = await pool.query('SELECT * FROM department WHERE faculty_id = ?',[faculty_id]);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;