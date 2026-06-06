const db = require("./api/database");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS test (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT
    )
  `);

  console.log("Tabela criada.");
});

db.close();