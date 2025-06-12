export async function initializeDatabase(database) {
  await database.execAsync(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title VARCHAR NOT NULL,
      quantity INTEGER NOT NULL DEFAULT 1,
      price REAL NOT NULL DEFAULT 0.0,
      image VARCHAR,
      create_date TIMESTAMP DEFAULT (datetime('now','localtime'))
    );
  `);
}