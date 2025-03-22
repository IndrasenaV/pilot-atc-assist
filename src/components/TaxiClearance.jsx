import React, { useState, useEffect } from "react";
import { Button, Typography, Grid, Box, Tabs, Tab } from "@mui/material";
import PhoneticText from "./PhoneticText";

const TaxiClearance = ({ aircraftCallSign, groundStationCallSign, departureAirport, atisCode, runway, aircraftLocation }) => {
  const [taxiPath, setTaxiPath] = useState([]);
  const [showResponse, setShowResponse] = useState(false);
  const [organizedTaxiways, setOrganizedTaxiways] = useState({});
  const [tabIndex, setTabIndex] = useState(0);

  // Function to organize taxiways by their main letter
  const organizeTaxiways = () => {
    const organized = {};
    const taxiways = departureAirport.taxiways || [];
    taxiways.forEach(taxiway => {
      const mainLetter = taxiway.charAt(0);
      if (!organized[mainLetter]) {
        organized[mainLetter] = [];
      }
      organized[mainLetter].push(taxiway);
    });
    return organized;
  };

  useEffect(() => {
    // Organize taxiways when departureAirport changes
    setOrganizedTaxiways(organizeTaxiways());
  }, [departureAirport]);

  const handleTaxiSelect = (route) => {
    setTaxiPath((prev) => [...prev, route]);
    setShowResponse(true);
  };

  const clearTaxiPath = () => {
    setTaxiPath([]);
    setShowResponse(false);
  };

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const CheckListContent = () => (
    <Box>
      <Typography variant="h6">Check List</Typography>
      <ul>
        <li>Check if the radio is on ground frequency</li>
        <li>Check for the lights</li>
        <li>Ask ATC for clearance</li>
      </ul>
    </Box>
  );

  const ATCCommsContent = () => (
    <Box>
      <Typography variant="h6">ATC Comms</Typography>
      <Box sx={{ mb: 3, p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
        <Typography variant="h6">Initial Call:</Typography>
        <InitialCallMessage />
      </Box>
      {/* Organized Taxiway Buttons */}
      {Object.entries(organizedTaxiways).map(([mainLetter, routes]) => (
        <Box key={mainLetter} sx={{ mb: 2 }}>
          {/* <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
            Taxiway <PhoneticText text={mainLetter} component="span" />
          </Typography> */}
          <Grid container spacing={1}>
            {routes.map((route) => (
              <Grid item key={route}>
                <Button 
                  variant="contained" 
                  onClick={() => handleTaxiSelect(route)}
                  size="small"
                  sx={{
                    minWidth: '60px',
                    backgroundColor: taxiPath.includes(route) ? '#4caf50' : undefined
                  }}
                >
                  {route}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}

      <Box sx={{ mt: 2, mb: 2 }}>
        <Button 
          variant="outlined" 
          color="secondary" 
          onClick={clearTaxiPath}
          sx={{ mr: 1 }}
        >
          Clear Path
        </Button>
      </Box>

      {showResponse && (
        <Box sx={{ p: 2, bgcolor: '#f0f7f0', borderRadius: 1 }}>
          <Typography variant="h6">Your Readback:</Typography>
          <ReadbackMessage />
        </Box>
      )}
    </Box>
  );

  const InitialCallMessage = () => (
    <Typography color="primary" sx={{ fontFamily: 'monospace' }}>
      {groundStationCallSign}, {aircraftCallSign}, 
      at the {aircraftLocation} with information <PhoneticText text={atisCode} component="span" />, 
      request taxi for departure
    </Typography>
  );

  const generateTaxiResponse = () => {
    if (taxiPath.length === 0) return "";
    return (
      <>
        {aircraftCallSign}, {groundStationCallSign}, 
        taxi to runway <PhoneticText text={runway} component="span" /> via{' '}
        {taxiPath.map((path, index) => (
          <React.Fragment key={path}>
            <PhoneticText text={path} component="span" />
            {index < taxiPath.length - 1 ? ' ' : ''}
          </React.Fragment>
        ))}, 
        hold short of runway <PhoneticText text={runway} component="span" />
      </>
    );
  };

  const ReadbackMessage = () => (
    <Typography color="primary" sx={{ fontFamily: 'monospace' }}>
      {groundStationCallSign},{aircraftCallSign} , 
      taxi to runway <PhoneticText text={runway} component="span" /> via{' '}
      {taxiPath.map((path, index) => (
        <React.Fragment key={path}>
          <PhoneticText text={path} component="span" />
          {index < taxiPath.length - 1 ? ', ' : ''}
        </React.Fragment>
      ))}, 
      hold short of runway <PhoneticText text={runway} component="span" />
    </Typography>
  );

  return (
    <Box sx={{ p: 2 }}>
     
      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab label="Check List" />
        <Tab label="ATC" />
      </Tabs>
      {tabIndex === 0 && <CheckListContent />}
      {tabIndex === 1 && <ATCCommsContent />}
    </Box>
  );
};

export default TaxiClearance;
