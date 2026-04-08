const express = require('express');
const cors = require('cors');
const inventory = require('./data/inventory.json');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/search', (req, res) => {
  const { q, category, minPrice, maxPrice } = req.query;

  if (
    minPrice &&
    maxPrice &&
    Number(minPrice) > Number(maxPrice)
  ) {
    return res.status(400).json({
      message: 'Invalid price range'
    });
  }

  let results = [...inventory];

  if (q && q.trim() !== '') {
    results = results.filter(item =>
      item.productName
        .toLowerCase()
        .includes(q.toLowerCase())
    );
  }

  if (category && category.trim() !== '') {
    results = results.filter(item =>
      item.category.toLowerCase() ===
      category.toLowerCase()
    );
  }

  if (minPrice) {
    results = results.filter(
      item => item.price >= Number(minPrice)
    );
  }

  if (maxPrice) {
    results = results.filter(
      item => item.price <= Number(maxPrice)
    );
  }

  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});