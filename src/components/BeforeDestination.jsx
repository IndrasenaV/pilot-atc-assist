import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography, Button, Select, MenuItem, FormControl, InputLabel, List, ListItem } from '@mui/material';

const BeforeDestination = ({ aircraft, arrivalAirport }) => {
  const [value, setValue] = useState(0);
  const [distance, setDistance] = useState(10);
  const [direction, setDirection] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDistanceChange = (event) => {
    setDistance(event.target.value);
  };

  const handleDirectionClick = (dir) => {
    setDirection(dir);
  };

  const atcCall = `${arrivalAirport.tower}, ${aircraft.callSign}, ${distance} miles to the ${direction}, inbound for landing.`;

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
                Ensure you are near 10-15 miles from the destination airport 
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Ensure you have set the frequency to the destination airport frequency of {arrivalAirport.frequencies.tower}
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
          <Box display="flex" justifyContent="center" mt={2} position="relative" width="200px" height="200px">
            {['E', 'SE', 'S', 'SW', 'W', 'NW', 'N', 'NE'].map((dir, index) => {
              const angle = (index / 8) * 2 * Math.PI; // Calculate angle for circular layout
              const x = 100 + 80 * Math.cos(angle); // X position
              const y = 100 + 80 * Math.sin(angle); // Y position
              return (
                <Button
                  key={dir}
                  onClick={() => handleDirectionClick(dir)}
                  variant="outlined"
                  style={{
                    position: 'absolute',
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: 'translate(-50%, -50%)', // Center the button
                  }}
                >
                  {dir}
                </Button>
              );
            })}
          </Box>
          {direction && (
            <Typography mt={2}>
              {atcCall}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default BeforeDestination; 