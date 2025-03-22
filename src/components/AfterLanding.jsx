import React from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';

const AfterLanding = () => {
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
          <Typography variant="h6">After Landing Check List</Typography>
          <ul>
            <li>Flaps: Retract</li>
            <li>Landing Lights: Off</li>
            <li>Transponder: Set to standby</li>
            <li>Taxi: Clear for taxi</li>
            <li>Parking Brake: Set</li>
          </ul>
        </Box>
      )}
      {value === 1 && (
        <Box>
          <Typography variant="h6">After Landing ATC Communication</Typography>
          <p>ATC: "Cessna 172N, taxi to parking via [taxiway]."</p>
        </Box>
      )}
    </Box>
  );
};

export default AfterLanding; 