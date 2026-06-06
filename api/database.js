const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(
  "./database/ghostbusters.db",
  (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("SQLite conectado.");
    }
  }
);

module.exports = db;