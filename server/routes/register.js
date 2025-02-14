const express = require('express');
const pool = require('../config/db');

const router = express.Router();
const tableName = 'student'

router.post('/', async (req, res) => {
    try {
      const { name, surname, email, password, university_name, department_name } = req.body;
      
      const [existingUser] = await pool.query(`SELECT * FROM ${tableName} WHERE email = ?`, [email]);
      if (existingUser.length > 0) {
        return res.status(400).json({ message: "Email kullanılıyor.", success:false });
      }

      const [university_id] = await pool.query(`SELECT university_id FROM university WHERE name = ?`,[university_name]);
      if(!university_name) {
        return res.status(404).json({message:'Üniversite bulunamadı.', success:false })
      }

      const [department_id] = await pool.query(`SELECT department_id FROM department WHERE department_name = ?`,[department_name]);
      if(!university_name) {
        return res.status(404).json({message:'Departmant bulunamadı.', success:false })
      }

      await pool.query(
        `INSERT INTO ${tableName} (name, surname, email, password, is_student, university_id, department_id) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [name, surname, email, password, 1, university_id[0].university_id, department_id[0].department_id]
      );
  
      res.status(201).json({ message: "User registered successfully", success:true });
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({ error: "Server error" });
    }
  });
  
  module.exports = router;