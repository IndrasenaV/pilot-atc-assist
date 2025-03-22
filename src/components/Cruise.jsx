import React from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';

const Cruise = () => {
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
          <Typography variant="h6">Cruise Check List</Typography>
          <ul>
            <li>Power: Set to cruise RPM</li>
            <li>Mixture: Lean for altitude</li>
            <li>Fuel: Check quantity and balance</li>
            <li>Navigation: Set and verify</li>
          </ul>
        </Box>
      )}
      {value === 1 && (
        <Box>
          <Typography variant="h6">Cruise ATC Communication</Typography>
          <p>ATC: "Cessna 172N, you are cleared to cruise at [altitude]."</p>
        </Box>
      )}
    </Box>
  );
};

export default Cruise; 