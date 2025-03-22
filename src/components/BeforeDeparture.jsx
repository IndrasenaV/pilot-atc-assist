import React, { useState } from "react";
import { Typography, Button, Box, List, ListItem, ListItemText, ListItemIcon, Tabs, Tab } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const BeforeDeparture = ({ aircraftCallSign, runway , departureAirport}) => {
  const [completedItems, setCompletedItems] = useState([]);
  const [towerResponse, setTowerResponse] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);

  const items = [
    `Set Tower Frequency (${departureAirport.frequencies.tower})`,
    "Initial Contact",
    "Tower Response",
    "Pilot Acknowledgment"
  ];

  const handleTowerResponse = (response) => {
    setTowerResponse(response);
    setCompletedItems([...new Set([...completedItems, 0, 1, 2, 3])]);
  };

  return (
    <Box sx={{ height: '100vh' }}>
      <Tabs value={selectedTab} onChange={(event, newValue) => setSelectedTab(newValue)}>
        <Tab label="Checklist" />
        <Tab label="ATC" />
      </Tabs>

      {selectedTab === 0 && (
        <List sx={{ mb: 3 }}>
          {items.map((item, index) => (
            <ListItem key={item}>
              <ListItemIcon>
                {completedItems.includes(index) ? 
                  <CheckCircleIcon color="success" /> : 
                  <RadioButtonUncheckedIcon />
                }
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      )}

      {selectedTab === 1 && (
        <>
          {!towerResponse && (
            <>
              <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                "{departureAirport.tower}, {aircraftCallSign}, holding short of Runway {runway}, ready for departure."
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 2 }}>
                Select Tower's Response:
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button 
                  variant="contained" 
                  color="success"
                  onClick={() => handleTowerResponse("cleared")}
                >
                  Cleared for Takeoff
                </Button>
                <Button 
                  variant="contained" 
                  color="warning"
                  onClick={() => handleTowerResponse("hold")}
                >
                  Hold Short
                </Button>
              </Box>
            </>
          )}

          {towerResponse && (
            <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
              {towerResponse === "cleared" ? (
                `"${aircraftCallSign}, ${departureAirport.tower}, cleared for takeoff Runway ${runway}"`
              ) : (
                `"${aircraftCallSign}, ${departureAirport.tower}, hold short Runway ${runway}"`
              )}
              <br />
              <span style={{ marginTop: '8px', display: 'block' }}>
                "{departureAirport.tower}, {aircraftCallSign}, {towerResponse === "cleared" ? 
                  `cleared for takeoff Runway ${runway}, wilco` : 
                  `holding short Runway ${runway}, wilco`}"
              </span>
            </Typography>
          )}
        </>
      )}
    </Box>
  );
};

export default BeforeDeparture;
