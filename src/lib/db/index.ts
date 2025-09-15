import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

// Only create database connection if DATABASE_URL is properly set
let db: ReturnType<typeof drizzle>;

if (process.env.DATABASE_URL && process.env.DATABASE_URL.startsWith('postgresql://') && !process.env.DATABASE_URL.includes('username:password')) {
  const sql = neon(process.env.DATABASE_URL);
  db = drizzle(sql, { schema });
} else {
  // Create a mock database for development/build time
  db = {} as ReturnType<typeof drizzle>;
}

export { db };
