import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import Search from './Search.jsx';
import GuessList from './GuessList.jsx';

function App() {

  const [allCountries, setAllCountries] = useState([]);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:3000/countries`)
      .then((res) => {
        setAllCountries(res.data);
        setCountry(res.data[Math.floor(Math.random() * res.data.length)]);
      })
  }, [])

  if (allCountries.length === 0) {
    return (
      <>
      <h1>
        Loading...
      </h1>
      </>
    )
  } else {
  return (
    <>
    <div className="overall">
      <div className="column">
        <h1>Country Guesser</h1>
        <div className="card">
          <button onClick={() => setCountry(allCountries[Math.floor(Math.random() * allCountries.length)])}>
            Change Country!
          </button>
        </div>
        <img src={`https://raw.githubusercontent.com/djaiss/mapsicon/33ba28808f8d32b5bae0ffada9cadd07073852e1/all/${country["country"].toLowerCase()}/vector.svg`}/>
      </div>
      <div className="column">
        <Search allCountries={allCountries} selectedCountry={country}/>
        <GuessList/>
      </div>
    </div>
    </>
  )
  }
}

export default App
