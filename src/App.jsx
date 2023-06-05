import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import countryCodes from 'country-codes-list';
import './App.css'

function App() {

  const myCountryCodesObject = countryCodes.customList('countryCode', '{countryCode}')
  console.log(Object.keys(myCountryCodesObject)[Math.floor(Math.random() * Object.keys(myCountryCodesObject).length)]);
  const [country, setCountry] = useState(Object.keys(myCountryCodesObject)[Math.floor(Math.random() * Object.keys(myCountryCodesObject).length)]);

  return (
    <>
      <h1>Country Guesser</h1>
      <div className="card">
        <button onClick={() => setCountry(Object.keys(myCountryCodesObject)[Math.floor(Math.random() * Object.keys(myCountryCodesObject).length)])}>
          Change Country!
        </button>
      </div>
      <img src={`https://raw.githubusercontent.com/djaiss/mapsicon/33ba28808f8d32b5bae0ffada9cadd07073852e1/all/${country.toLowerCase()}/vector.svg`}/>

    </>
  )
}

export default App
