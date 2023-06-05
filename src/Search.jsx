import './App.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function Search( { allCountries, selectedCountry } ) {


  let countries = allCountries.map((country) => {
    return {
      code: country["country"],
      label: country["name"],
    }
  })

  function handleSubmit (event) {
    event.preventDefault();

    if (selectedCountry["name"] === event.target[0].value) {
      console.log('Hoory, the country was ', selectedCountry);
    } else {
      console.log('Sorry, the country was not ', event.target[0].value);
      console.log(selectedCountry["name"]);
      console.log(event.target[0].value);
    }
  }

  return (
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
    <button type="submit">
      Submit!
    </button>
  </form>
  );


}

export default Search
