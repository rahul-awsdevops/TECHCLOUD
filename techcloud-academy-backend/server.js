const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL connection pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: { rejectUnauthorized: false },
});

// Create enrollments table if not exists
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS enrollments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    mobile VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    course VARCHAR(255) NOT NULL,
    duration VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

pool.query(createTableQuery)
  .then(() => console.log('Enrollments table is ready'))
  .catch((err) => console.error('Error creating table:', err));

// API route to handle enrollment form submissions
app.post('/enroll', async (req, res) => {
  const { name, country, city, mobile, email, course, duration } = req.body;

  if (!name || !country || !city || !mobile || !email || !course || !duration) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const query = `INSERT INTO enrollments (name, country, city, mobile, email, course, duration) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
    const values = [name, country, city, mobile, email, course, duration];

    const result = await pool.query(query, values);
    res.status(201).json({ message: 'Enrollment successful', data: result.rows[0] });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});