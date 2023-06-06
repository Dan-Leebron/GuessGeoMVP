import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function distance(lat1, lon1, lat2, lon2) {
  var p = 0.017453292519943295;    // Math.PI / 180
  var c = Math.cos;
  var a = 0.5 - c((lat2 - lat1) * p)/2 +
          c(lat1 * p) * c(lat2 * p) *
          (1 - c((lon2 - lon1) * p))/2;

  return Math.round(12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
}

let victoryScreen = (<></>)

export default function GuessList({ guesses, country, countryFound }) {

  if (countryFound) {
    victoryScreen = (<h1>Congrats! You guessed right!</h1>)
  } else {
    victoryScreen = (<></>)
  }

  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Countries Guessed</TableCell>
            <TableCell align="right">Distance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {guesses.map((row) => (
            <TableRow
              key={row["name"]}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row["name"]}
              </TableCell>
              <TableCell align="right">{distance(country["latitude"], country["longitude"], row["latitude"], row["longitude"])} km</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {victoryScreen}
    </>
  );
}