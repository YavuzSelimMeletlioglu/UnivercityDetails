const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Get all courses
router.get('/:department_id', async (req, res) => {
  try {
    const {department_id} = req.params
    const [rows] = await pool.query('SELECT * FROM course WHERE department_id = ?', [department_id]);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;