import express from 'express';
// const getReviews = require('../database/dbMethods/getReviews.js');
import getCountries from '../DB/getCountries.js'
import dotenv from 'dotenv'
import cors from 'cors';
dotenv.config();

const port = process.env.SERVER_PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.get('/countries', async (req, res) => {
  try {
    let countryList = await getCountries();
    res.status(200).send(countryList);
  } catch (error) {
    res.status(400).send(error);
  }
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

export default app;
