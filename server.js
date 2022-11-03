//require dependices
const express = require('express');
const path = require('path');
const fs = require('fs');
const api = require('./routes/routes.js');

// Initialize Express
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api)
app.use(express.static('public'));

//Get route index
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//Get route notes
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Initiates port listening
app.listen(PORT, () =>
  console.log(`App listening on PORT: http://localhost:${PORT} `)
);