const express = require('express');
const pool = require('../config/db');

const router = express.Router();
const tableName = 'student'


router.post('/', async (req, res) => {
  const {email, password} = req.body;

  const [isValid] = await pool.query(`SELECT * FROM ${tableName} WHERE email = ? and password = ?;`, [email, password]);

  console.log(isValid)
  res.status(200).json({
    success: true,
    isValid
  })
})

module.exports = router;