import './App.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react'

function Search( { allCountries, selectedCountry, guesses, setGuesses, setCountryFound, gaveUp, setGaveUp } ) {




  let countries = allCountries.map((country) => {
    return {
      code: country["country"],
      label: country["name"],
    }
  })

  function handleSubmit (event) {
    event.preventDefault();

    var guessedCountry = allCountries.filter(obj => {
      return obj['name'] === event.target[0].value;
    })

    let allGuesses = [...guesses, ...guessedCountry];
    setGuesses(allGuesses);
    console.log('updated guesses', guesses);

    if (selectedCountry["name"] === event.target[0].value) {
      setCountryFound(true);
      console.log('Hoory, the country was ', selectedCountry);
    } else {
      console.log('Sorry, the country was not ', event.target[0].value);
      console.log(selectedCountry["name"]);
      console.log(event.target[0].value);
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
    <Autocomplete
      sx={{ width: 600,
            border: '3 px black' }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {option.label}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password',
          }}
        />
      )}
    />
    <br></br>
    <div className="overall">
      <button className="column" type="submit">
        Submit!
      </button>
      <button className="column" type="button" onClick={() => {
        setGaveUp(true);
      }}>
        Give Up?
      </button>
    </div>
  </form>
  {gaveUp ? (<h1>This was a tough one! The country was {selectedCountry["name"]}</h1>) : (<></>)}
  </>
  );


}

export default Search
