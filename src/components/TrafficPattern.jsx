import React from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';

const TrafficPattern = () => {
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
          <Typography variant="h6">Traffic Pattern Check List</Typography>
          <ul>
            <li>Altitude: Maintain pattern altitude</li>
            <li>Flaps: Set as required</li>
            <li>Speed: Adjust for pattern</li>
            <li>Landing Lights: On</li>
            <li>Clear: Check for traffic</li>
          </ul>
        </Box>
      )}
      {value === 1 && (
        <Box>
          <Typography variant="h6">Traffic Pattern ATC Communication</Typography>
          <p>ATC: "Cessna 172N, enter left downwind for [runway]."</p>
        </Box>
      )}
    </Box>
  );
};

export default TrafficPattern; 