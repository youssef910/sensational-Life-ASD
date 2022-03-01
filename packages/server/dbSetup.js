import { readFileSync } from 'fs';
import pkg from 'pg';
const { Pool } = pkg;

const dbUrl = process.env.DATABASE_URL || 'postgres://localhost:5432/asd';

const pool = new Pool({
  connectionString: dbUrl,
  connectionTimeoutMillis: 5000,
  ssl: /localhost|192.168./gi.test(dbUrl)
    ? false
    : { rejectUnauthorized: false },
});

/**
 * this routine supposed to be executed during the build process
 * if in case process.env.DATABASE_RESET is set to `true`
 * for more info see "postbuild" jon in packaje.json.
 */
const dbSetup = readFileSync('./dbSetup.sql').toString();
const dbSeed = readFileSync('./dbSeed.sql').toString();
pool
  .query(dbSetup)
  .then(() => console.info('running db setup script...'))
  .then(pool.query(dbSeed))
  .then(() => console.info('running db seed script...'))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
