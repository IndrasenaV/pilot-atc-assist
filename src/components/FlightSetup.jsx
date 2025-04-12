import React, { useState, useEffect } from "react";
import { Box, TextField, MenuItem, FormControl, InputLabel, Select, Grid, Typography } from "@mui/material";
import airports from '../data/airports'; // Import airports
import aircrafts from '../data/aircrafts'; // Import aircrafts

const FlightSetup = ({
  setAircraft,
  aircraft,
  setDepartureRunway,
  departureRunway,
  setArrivalRunway,
  arrivalRunway,
  setDepartureDirection,
  departureDirection,
  setAltitude,
  altitude,
  setDepartureAirport,
  departureAirport,
  setArrivalAirport,
  arrivalAirport,
  setAtisCode,
  atisCode,
  setAircraftLocation,
  aircraftLocation,
}) => {



  const handleDepartureAirportChange = (event) => {
    const selected = airports.find((ap) => ap.code === event.target.value);
    setDepartureAirport(selected); // Passing the entire airport object
  };

  const handleArrivalAirportChange = (event) => {
    const selected = airports.find((ap) => ap.code === event.target.value);
    setArrivalAirport(selected);
  };

  const handleAircraftChange = (event) => {
    const selectedAc = aircrafts.find(ac => ac.callSign === event.target.value);
    setAircraft(selectedAc);
  };

  const handleAtisChange = (e) => {
    const newAtis = e.target.value.toUpperCase();
    setAtisCode(newAtis);
  };

  const handleLocationChange = (event) => {
    setAircraftLocation(event.target.value);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Aircraft</InputLabel>
            <Select
              value={aircraft.callSign}
              onChange={handleAircraftChange}
            >
              {aircrafts.map((ac) => (
                <MenuItem key={ac.callSign} value={ac.callSign}>
                  {ac.callSign}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Add this new section after aircraft selection and before departure airport */}
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Aircraft Location</InputLabel>
            <Select
              value={aircraftLocation}
              onChange={handleLocationChange}
            >
              {departureAirport?.aircraftLocations?.map((location) => (
                <MenuItem key={location} value={location}>
                  {location}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

     


        {/* Departure Airport Section */}
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>Departure</Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Departure Airport</InputLabel>
            <Select value={departureAirport.code} onChange={handleDepartureAirportChange}>
              {airports.map((airport) => (
                <MenuItem key={airport.code} value={airport.code}>
                  {airport.code} - {airport.name} {!airport.isTowered && "(Non-Towered)"}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            label="Ground"
            value={departureAirport?.frequencies?.ground || 'N/A'}
            disabled
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            label="Tower"
            value={departureAirport?.frequencies?.tower || 'N/A'}
            disabled
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            label="ATIS"
            value={departureAirport?.frequencies?.atis || 'N/A'}
            disabled
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            label={departureAirport?.isTowered ? "Clearance" : "CTAF"}
            value={departureAirport?.frequencies?.clearance || departureAirport?.frequencies?.ctaf || 'N/A'}
            disabled
          />
        </Grid>
           {/* Add this new section for direction selection after aircraft location */}
           <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Departure Direction</InputLabel>
            <Select
              value={departureDirection}
              onChange={(e) => setDepartureDirection(e.target.value)}
            >
              {['North', 'North West', 'West', 'South West', 'South', 'South East', 'East', 'North East'].map((direction) => (
                <MenuItem key={direction} value={direction}>
                  {direction}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Modified ATIS Code section */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Current ATIS Code"
            value={atisCode}
            onChange={handleAtisChange}
            inputProps={{
              maxLength: 1,
              style: { textTransform: 'uppercase' }
            }}
          />
        </Grid>

        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Departure Runway</InputLabel>
            <Select onChange={(e) => setDepartureRunway(e.target.value)} value={departureRunway }>
              {departureAirport?.runways.map((runway) => (
                <MenuItem key={runway} value={runway}>{runway}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Cruising Altitude</InputLabel>
            <Select onChange={(e) => setAltitude(e.target.value)} value={altitude}>
              {[500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000].map((alt) => (
                <MenuItem key={alt} value={alt}>{alt} feet</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Arrival Airport Section */}
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>Arrival</Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Arrival Airport</InputLabel>
            <Select value={arrivalAirport.code} onChange={handleArrivalAirportChange}>
              {airports.map((airport) => (
                <MenuItem key={airport.code} value={airport.code}>
                  {airport.code} - {airport.name} {!airport.isTowered && "(Non-Towered)"}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        {arrivalAirport && (
          <>
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="Ground"
                value={arrivalAirport?.frequencies?.ground || 'N/A'}
                disabled
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="Tower"
                value={arrivalAirport?.frequencies?.tower || 'N/A'}
                disabled
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="ATIS"
                value={arrivalAirport?.frequencies?.atis || 'N/A'}
                disabled
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                label={arrivalAirport?.isTowered ? "Clearance" : "CTAF"}
                value={arrivalAirport?.frequencies?.clearance || arrivalAirport?.frequencies?.ctaf || 'N/A'}
                disabled
              />
            </Grid>
            <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Arrival Runway</InputLabel>
            <Select onChange={(e) => setArrivalRunway(e.target.value)} value={arrivalRunway }>
              {arrivalAirport?.runways.map((runway) => (
                <MenuItem key={runway} value={runway}>{runway}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
          </>
          
        )}


      </Grid>
    </>
  );
};

export default FlightSetup;
