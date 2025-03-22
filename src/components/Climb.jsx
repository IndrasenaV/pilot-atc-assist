import React, { useState } from "react";
import { Typography, Tabs, Tab, Box } from "@mui/material";

const Climb = ({ callSign, altitude }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const checkListItems = [
    "Vy speed to maintain: 70 knots",
    "Ensure all systems are operational",
    "Check fuel levels",
    "Monitor climb rate",
    "Communicate with ATC"
  ];

  return (
    <>
      <Box>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Check List" />
          <Tab label="ATC" />
        </Tabs>
        {value === 0 && (
          <Box>
            <Typography variant="h6">Check List</Typography>
            <ul>
              {checkListItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Box>
        )}
        {value === 1 && (
          <Box>
            <Typography variant="h6">ATC Communication</Typography>
            <Typography>
              "ATC, {callSign}, climbing to {altitude} feet."
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Climb;
