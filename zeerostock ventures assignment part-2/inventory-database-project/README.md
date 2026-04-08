# Inventory Database Project

## Tech Stack
- Node.js
- Express
- SQLite

## Why SQL?
SQL is chosen because:
- Supplier and Inventory have structured relationships
- Foreign keys ensure data consistency
- Aggregation queries are easy with SQL

## APIs

### POST /supplier
Create supplier

### POST /inventory
Add inventory item

### GET /inventory
Fetch all inventory

### GET /inventory/grouped
Grouped by supplier and sorted by total inventory value

## Optimization Suggestion
Add index on supplier_id for faster joins:

CREATE INDEX idx_supplier_id ON inventory(supplier_id);