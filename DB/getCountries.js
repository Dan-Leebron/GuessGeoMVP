import pool from './index.js';

async function getCountries () {


  const query = {
    text: `SELECT * from countries`,
    values: [],
  }

  try {
    const res = await pool.query(query)
    return res.rows;
  } catch (err) {
    console.log(err.stack)
    return err;
  }

}

export default getCountries;