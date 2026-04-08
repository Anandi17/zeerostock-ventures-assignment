const { getDB } = require('../db/connection');

const createInventory = async (req, res) => {
  const {
    supplier_id,
    product_name,
    quantity,
    price
  } = req.body;

  const db = getDB();

  const supplier = await db.get(
    `SELECT * FROM suppliers WHERE id = ?`,
    [supplier_id]
  );

  if (!supplier) {
    return res.status(400).json({
      message: 'Invalid supplier_id'
    });
  }

  if (quantity < 0) {
    return res.status(400).json({
      message: 'Quantity must be 0 or more'
    });
  }

  if (price <= 0) {
    return res.status(400).json({
      message: 'Price must be greater than 0'
    });
  }

  const result = await db.run(
    `INSERT INTO inventory
    (supplier_id, product_name, quantity, price)
    VALUES (?, ?, ?, ?)`,
    [supplier_id, product_name, quantity, price]
  );

  res.status(201).json({
    message: 'Inventory added successfully',
    inventoryId: result.lastID
  });
};

const getInventory = async (req, res) => {
  const db = getDB();

  const inventory = await db.all(`
    SELECT 
      inventory.id,
      suppliers.name AS supplier_name,
      suppliers.city,
      inventory.product_name,
      inventory.quantity,
      inventory.price
    FROM inventory
    JOIN suppliers
    ON inventory.supplier_id = suppliers.id
  `);

  res.json(inventory);
};

const getInventoryGroupedBySupplier = async (req, res) => {
  const db = getDB();

  const groupedData = await db.all(`
    SELECT
      suppliers.id,
      suppliers.name,
      suppliers.city,
      SUM(inventory.quantity * inventory.price)
      AS total_inventory_value
    FROM suppliers
    JOIN inventory
    ON suppliers.id = inventory.supplier_id
    GROUP BY suppliers.id
    ORDER BY total_inventory_value DESC
  `);

  res.json(groupedData);
};

module.exports = {
  createInventory,
  getInventory,
  getInventoryGroupedBySupplier
};