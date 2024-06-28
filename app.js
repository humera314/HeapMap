const express = require('express');
const path = require('path');
const heatmapRoutes = require('./routes/heatmap');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/heatmap', heatmapRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
