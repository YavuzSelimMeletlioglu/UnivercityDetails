const express = require('express');
const router = express.Router();
const pool = require('../config/db');

router.get('/:course_id', async (req, res) => {
  try {
    const { course_id } = req.params;
    const query = `
      SELECT cd.*, c.course_code, c.course_name 
      FROM course_detail cd 
      JOIN course c ON cd.course_id = c.course_id
      WHERE cd.course_id = ?`;
    
    const [rows] = await pool.query(query, [course_id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Course details not found" });
    }

    res.json(rows[0]);
  } catch (err) {
    console.error("Error fetching course details:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;