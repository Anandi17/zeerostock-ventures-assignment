const { getDB } = require('../db/connection');

const createSupplier = async (req, res) => {
  const { name, city } = req.body;

  if (!name || !city) {
    return res.status(400).json({
      message: 'Name and city are required'
    });
  }

  const db = getDB();

  const result = await db.run(
    `INSERT INTO suppliers (name, city)
     VALUES (?, ?)`,
    [name, city]
  );

  res.status(201).json({
    message: 'Supplier created successfully',
    supplierId: result.lastID
  });
};

module.exports = { createSupplier };