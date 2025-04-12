import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography, Button, Select, MenuItem, FormControl, InputLabel, List, ListItem } from '@mui/material';

const PatternDestination = ({ aircraft, arrivalAirport , arrivalRunway}) => {
  const [value, setValue] = useState(0);
  const [distance, setDistance] = useState(13);
  const [direction, setDirection] = useState('');
  const [intention, setIntention] = useState('landing');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDistanceChange = (event) => {
    setDistance(event.target.value);
  };

  const handleIntentionChange = (event) => {
    setIntention(event.target.value);
  };

  const handleDirectionClick = (dir) => {
    setDirection(dir);
  };

  const generateATCCalls = (isTowered) => {
    if (isTowered) {
      return {
        enteringPattern: `${aircraft.callSign}, entering the pattern for ${intention}, ${arrivalAirport.tower}.`,
        downwind: `${aircraft.callSign}, on downwind for runway, ${intention}, ${arrivalAirport.tower}.`,
        base: `${aircraft.callSign}, turning base for runway, ${intention}, ${arrivalAirport.tower}.`,
        final: `${aircraft.callSign}, on final for runway, ${intention}, ${arrivalAirport.tower}.`,
        afterLanding: `${aircraft.callSign}, clear of the runway, ${arrivalAirport.tower}.`,
      };
    } else {
      return {
        enteringPattern: `${arrivalAirport.tower} , ${aircraft.callSign}, entering the pattern for ${intention} ${arrivalAirport.tower}.`,
        downwind: `${arrivalAirport.tower} , ${aircraft.callSign}, on downwind for runway ${arrivalRunway} , for ${intention} ${arrivalAirport.tower}.`,
        base: `${arrivalAirport.tower} , ${aircraft.callSign}, turning base for runway ${arrivalRunway} , for ${intention} ${arrivalAirport.tower}.`,
        final: `${arrivalAirport.tower} , ${aircraft.callSign}, on final for runway ${arrivalRunway} , for ${intention} ${arrivalAirport.tower}.`,
        afterLanding: `${arrivalAirport.tower} , ${aircraft.callSign}, clear of the runway ${arrivalRunway} ${arrivalAirport.tower}.`,
      };
    }
  };


  const atcCalls = generateATCCalls(arrivalAirport.isTowered);

  return (
    <Box>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Check List" />
        <Tab label="ATC" />
      </Tabs>
      {value === 0 && (
        <Box>
          <List>
            <ListItem>
              <Typography>
                Ensure you are near 11-15 miles from the destination airport 
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Ensure you have set the frequency to the destination airport frequency of {arrivalAirport.frequencies.tower}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Call ATC for arrival clearance
              </Typography>
            </ListItem>
          </List>
        </Box>
      )}
      {value === 1 && (
        <Box>
          <Typography variant="h6">ATC Communication</Typography>
          <FormControl fullWidth>
            <InputLabel>Distance (miles)</InputLabel>
            <Select value={distance} onChange={handleDistanceChange}>
              {[...Array(11).keys()].map(i => (
                <MenuItem key={i + 10} value={i + 10}>{i + 10}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth mt={2}>
            <InputLabel>Intention</InputLabel>
            <Select value={intention} onChange={handleIntentionChange}>
              <MenuItem value="landing">Landing</MenuItem>
              <MenuItem value="touch and go">Touch and Go</MenuItem>
            </Select>
          </FormControl>
          <Box display="flex" justifyContent="center" mt={2} position="relative" width="200px" height="200px">
            {['E', 'SE', 'S', 'SW', 'W', 'NW', 'N', 'NE'].map((dir, index) => {
              const angle = (index / 8) * 2 * Math.PI;
              const x = 100 + 80 * Math.cos(angle);
              const y = 100 + 80 * Math.sin(angle);
              return (
                <Button
                  key={dir}
                  onClick={() => handleDirectionClick(dir)}
                  variant="outlined"
                  style={{
                    position: 'absolute',
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  {dir}
                </Button>
              );
            })}
          </Box>
          {direction && (
            <Box mt={2}>
              <Typography>{atcCalls.enteringPattern}</Typography>
              <Typography>{atcCalls.downwind}</Typography>
              <Typography>{atcCalls.base}</Typography>
              <Typography>{atcCalls.final}</Typography>
              <Typography>{atcCalls.afterLanding}</Typography>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default PatternDestination; 