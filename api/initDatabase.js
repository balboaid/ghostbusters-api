const db = require("./database");

db.serialize(() => {

  db.run(`
    CREATE TABLE IF NOT EXISTS companies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT UNIQUE,
      website TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS jobs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      company_id INTEGER,
      platform TEXT,
      title TEXT,
      job_url TEXT UNIQUE,
      first_seen DATETIME DEFAULT CURRENT_TIMESTAMP,
      last_seen DATETIME DEFAULT CURRENT_TIMESTAMP,
      active INTEGER DEFAULT 1
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS job_snapshots (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      job_id INTEGER,
      status TEXT,
      raw_data TEXT,
      snapshot_date DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

});

console.log("Banco inicializado.");