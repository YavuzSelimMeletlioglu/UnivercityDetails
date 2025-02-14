const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

// Routes
const courseRoutes = require('./routes/courses');
app.use('/get-courses', courseRoutes);

const courseDetailsRoutes = require('./routes/courseDetails');
app.use('/get-course-details', courseDetailsRoutes);

const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

const registerRoutes = require('./routes/register');
app.use('/register', registerRoutes)

const universityRoutes = require('./routes/university');
app.use('/get-universities', universityRoutes)

const facultyRoutes = require('./routes/faculty');
app.use('/get-faculties', facultyRoutes);

const departmentRoutes = require('./routes/department');
app.use('/get-departments', departmentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));