const express = require('express');
const router = express.Router();

const {
  createInventory,
  getInventory,
  getInventoryGroupedBySupplier
} = require('../controllers/inventoryController');

router.post('/inventory', createInventory);
router.get('/inventory', getInventory);
router.get('/inventory/grouped', getInventoryGroupedBySupplier);

module.exports = router;