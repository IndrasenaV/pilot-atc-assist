import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';

const BeforeDestination = ({ distanceToAirport, destinationFrequency }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isChecklistValid = distanceToAirport <= 10 && destinationFrequency;

  return (
    <Box>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Check List" />
        <Tab label="ATC" />
      </Tabs>
      {value === 0 && (
        <Box>
          <Typography variant="h6">Check List</Typography>
          <Typography>
            {isChecklistValid ? "Checklist is valid." : "Ensure you are within 10 miles and frequency is set."}
          </Typography>
        </Box>
      )}
      {value === 1 && (
        <Box>
          <Typography variant="h6">ATC Communication</Typography>
          <Typography>
            Initial call to tower: "Tower, [Your Call Sign], [Your Position], inbound for landing."
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default BeforeDestination; 