const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql2');
// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your React app's URL
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
const pool = mysql.createPool({
    host: 'localhost',     // Replace with your MySQL host
    user: 'root', // Replace with your MySQL username
    password: 'Mypass123!', // Replace with your MySQL password
    database: 'spaceproject',  // Replace with your database name
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
  
  // Test the connection
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL database!');
    connection.release();
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/***************************************HTTP Requests**************************************/
app.get('/planets', (req, res) => {
  const searchTerm = req.query.searchTerm || '';
  const sql = `SELECT * FROM planets WHERE name LIKE '%${searchTerm}%'`;

  pool.query(sql, (err, results) => {
    if (err) {
      console.error('Error querying planets:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});
