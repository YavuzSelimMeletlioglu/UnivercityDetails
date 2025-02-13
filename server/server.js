const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

// Routes
const courseRoutes = require('./routes/courses');
app.use('/courses', courseRoutes);

const courseDetailsRoutes = require('./routes/courseDetails');
app.use('/course-details', courseDetailsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));