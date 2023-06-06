import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import Search from './Search.jsx';
import GuessList from './GuessList.jsx';

function App() {

  const [allCountries, setAllCountries] = useState([]);
  const [country, setCountry] = useState([]);
  const [guesses, setGuesses] = useState([]);
  const [countryFound, setCountryFound] = useState(false);
  const [gaveUp, setGaveUp] = useState(false);
  const [rotation, setRotation] = useState(true);

  useEffect(() => {
    axios.get(`http://127.0.0.1:3000/countries`)
      .then((res) => {
        setAllCountries(res.data);
        setCountry(res.data[Math.floor(Math.random() * res.data.length)]);
      })
  }, [])

  let rotationAmount = Math.floor(Math.random() * (360));

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
          <div className="overall">
            <div className="column" >
              <button onClick={() => {setCountry(allCountries[Math.floor(Math.random() * allCountries.length)]);
                                      setCountryFound(false);
                                      setGuesses([]);
                                      setGaveUp(false);
                                      setRotation(true);}}>
                Change Country!
              </button>
              <button className="column" onClick={() => {setRotation(!rotation)}}>
                Toggle Rotation
              </button>
            </div>
          </div>
        <img style={{'transform': rotation ? `rotate(${rotationAmount}deg)` : `rotate(0deg)`}} src={`https://raw.githubusercontent.com/djaiss/mapsicon/33ba28808f8d32b5bae0ffada9cadd07073852e1/all/${country["country"].toLowerCase()}/vector.svg`}/>
      </div>
      <div className="column">
        <Search allCountries={allCountries} selectedCountry={country} guesses={guesses} setGuesses={setGuesses} setCountryFound={setCountryFound} gaveUp={gaveUp} setGaveUp={setGaveUp}/>
        <br></br>
        <GuessList guesses={guesses} country={country} countryFound={countryFound}/>
      </div>
    </div>
    </>
  )
  }
}

export default App
