import sqlite3 from "sqlite3";
import { open } from "sqlite";

// Open a SQLite database file
export async function openDb() {
  return open({
    filename: "./monaarch.db", // stored in project root
    driver: sqlite3.Database,
  });
}

// Initialize tables if not exists
export async function initDb() {
  const db = await openDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      services_used TEXT DEFAULT ''
    );

    CREATE TABLE IF NOT EXISTS user_plans (
      user_id INTEGER PRIMARY KEY,
      plan TEXT NOT NULL DEFAULT 'free',
      renews_at TIMESTAMP,
      FOREIGN KEY(user_id) REFERENCES users(id)
    );

    CREATE TABLE IF NOT EXISTS usage_limits (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      feature TEXT NOT NULL,
      used INTEGER NOT NULL DEFAULT 0,
      period_start TEXT NOT NULL,
      period_end TEXT NOT NULL,
      FOREIGN KEY(user_id) REFERENCES users(id)
    );
  `);
}
