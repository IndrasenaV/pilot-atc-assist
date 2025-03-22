import React from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';

const Approach = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Check List" />
        <Tab label="ATC" />
      </Tabs>
      {value === 0 && (
        <Box>
          <Typography variant="h6">Approach Check List</Typography>
          <ul>
            <li>Landing Gear: Down and locked</li>
            <li>Flaps: Set for approach</li>
            <li>Speed: Adjust for landing</li>
            <li>Fuel: Check for landing</li>
            <li>Landing Lights: On</li>
          </ul>
        </Box>
      )}
      {value === 1 && (
        <Box>
          <Typography variant="h6">Approach ATC Communication</Typography>
          <p>ATC: "Cessna 172N, you are cleared for the approach to [runway]."</p>
        </Box>
      )}
    </Box>
  );
};

export default Approach; 