const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const path = require('path');
const fs = require('fs');

const dbPath = path.join(__dirname, '../../inventory.db');
const schemaPath = path.join(__dirname, 'schema.sql');

let db;

const connectDB = async () => {
  db = await open({
    filename: dbPath,
    driver: sqlite3.Database
  });

  const schema = fs.readFileSync(schemaPath, 'utf8');
  await db.exec(schema);

  return db;
};

const getDB = () => db;

module.exports = { connectDB, getDB };