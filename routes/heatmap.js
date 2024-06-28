const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Endpoint to get location data
router.get('/data', (req, res) => {
  const dataPath = path.join(__dirname, '..', 'data', 'location-history.json');
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading location data');
    }
    res.json(JSON.parse(data));
  });
});

module.exports = router;
