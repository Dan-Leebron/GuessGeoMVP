import pg from 'pg';
const { Pool } = pg;
import dotenv from 'dotenv'
dotenv.config();

let pool = new Pool({
  host: process.env.PGHOST || 'localhost',
  user: process.env.PGUSER,
  database: process.env.PGDATABASE || 'countries',
  port: process.env.PGPORT || 5432,
});

pool.connect((err) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  } else {
    console.log('Connected to DB');
  }
})

export default pool;