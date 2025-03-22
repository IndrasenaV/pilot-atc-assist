import React from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';

const Landing = () => {
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
          <Typography variant="h6">Landing Check List</Typography>
          <ul>
            <li>Landing Gear: Down and locked</li>
            <li>Flaps: Set for landing</li>
            <li>Speed: Adjust for landing</li>
            <li>Clear: Check for traffic</li>
            <li>Runway: Confirm landing clearance</li>
          </ul>
        </Box>
      )}
      {value === 1 && (
        <Box>
          <Typography variant="h6">Landing ATC Communication</Typography>
          <p>ATC: "Cessna 172N, you are cleared to land on [runway]."</p>
        </Box>
      )}
    </Box>
  );
};

export default Landing; 