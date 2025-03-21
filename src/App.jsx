import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Container, Button, Box, Drawer, IconButton, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import FlightSetup from "./components/FlightSetup";
import TaxiClearance from "./components/TaxiClearance";
import BeforeDeparture from "./components/BeforeDeparture";
import Climb from "./components/Climb";

function App() {
  const [aircraft, setAircraft] = useState(null);
  const [runway, setRunway] = useState("");
  const [altitude, setAltitude] = useState("");
  const [groundStation, setGroundStation] = useState("McKinney Ground");
  const [departureAirport, setDepartureAirport] = useState(null);
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [atisCode, setAtisCode] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [aircraftLocation, setAircraftLocation] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedPhase, setSelectedPhase] = useState("Flight Setup");

  const steps = [
    {
      component: (
        <FlightSetup 
          setAircraft={setAircraft}
          setRunway={setRunway} 
          setAltitude={setAltitude}
          setGroundStation={setGroundStation}
          setDepartureAirport={setDepartureAirport}
          setArrivalAirport={setArrivalAirport}
          setAtisCode={setAtisCode}
          setAircraftLocation={setAircraftLocation}
        />
      )
    },
    {
      component: (
        <TaxiClearance 
          aircraftCallSign={aircraft?.callSign} 
          groundStationCallSign={groundStation}
          departureAirport={departureAirport}
          atisCode={atisCode}
          runway={runway}
          aircraftLocation={aircraftLocation}
        />
      )
    },
    {
      component: (
        <BeforeDeparture 
          callSign={aircraft?.callSign} 
          runway={runway}
          departureAirport={departureAirport}
        />
      )
    },
    {
      component: (
        <Climb 
          callSign={aircraft?.callSign} 
          altitude={altitude}
          departureAirport={departureAirport}
          arrivalAirport={arrivalAirport}
        />
      )
    }
  ];

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handlePhaseSelect = (phase) => {
    setSelectedPhase(phase);
    setDrawerOpen(false);
    
    const phaseToStepMap = {
      "Flight Setup": 0,
      "Taxi": 1,
      "Before Departure": 2,
      "Climb": 3,
      "Cruise": 4,
      "Approach": 5,
      "Traffic Pattern": 6,
      "Landing": 7,
      "After Landing": 8
    };

    setCurrentStep(phaseToStepMap[phase] || 0);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Pilot ATC Assistant</Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {["Flight Setup", "Taxi", "Before Departure", "Climb", "Cruise", "Approach", "Traffic Pattern", "Landing", "After Landing"].map((phase) => (
            <MenuItem key={phase} onClick={() => handlePhaseSelect(phase)}>
              {phase}
            </MenuItem>
          ))}
        </Box>
      </Drawer>
      <Container>
        {steps[currentStep].component}
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3, mb: 3 }}>
          <Button
            variant="contained"
            onClick={handleBack}
            disabled={currentStep === 0}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={currentStep === steps.length - 1 || !departureAirport}
          >
            Next
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default App;
