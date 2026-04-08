const express = require('express');
const { connectDB } = require('./db/connection');

const supplierRoutes = require('./routes/supplierRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');

const app = express();
const PORT = 5000;

app.use(express.json());

app.use(supplierRoutes);
app.use(inventoryRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});