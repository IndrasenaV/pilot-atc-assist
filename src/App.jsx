import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Container, Button, Box, Drawer, IconButton, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import FlightSetup from "./components/FlightSetup";
import TaxiClearance from "./components/TaxiClearance";
import BeforeDeparture from "./components/BeforeDeparture";
import Climb from "./components/Climb";
import Cruise from "./components/Cruise";
import Approach from "./components/Approach";
import TrafficPattern from "./components/TrafficPattern";
import Landing from "./components/Landing";
import AfterLanding from "./components/AfterLanding";
import BeforeDestination from "./components/BeforeDestination";
import airports from './data/airports'; // Import airports
import aircrafts from './data/aircrafts'; 

function App() {
  let airport = airports[0];
  const [aircraft, setAircraft] = useState(aircrafts[0]);
  const [departureRunway, setDepartureRunway] = useState(airport.runways[0]);
  const [altitude, setAltitude] = useState(2000);
  const [departureAirport, setDepartureAirport] = useState(airport);
  const [arrivalAirport, setArrivalAirport] = useState(airport);
  const [atisCode, setAtisCode] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [aircraftLocation, setAircraftLocation] = useState(airport.aircraftLocations[0]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedPhase, setSelectedPhase] = useState("Flight Setup");
  const [distanceToAirport, setDistanceToAirport] = useState(14);
  const [destinationFrequency, setDestinationFrequency] = useState("");

  const steps = [
    {
      component: (
        <FlightSetup 
          setAircraft={setAircraft}
          aircraft={aircraft}
          departureRunway={departureRunway} 
          setDepartureRunway={setDepartureRunway}
          setAltitude={setAltitude}
          altitude={altitude}
          setDepartureAirport={setDepartureAirport}
          departureAirport={departureAirport}
          setArrivalAirport={setArrivalAirport}
          arrivalAirport={arrivalAirport}
          setAtisCode={setAtisCode}
          atisCode={atisCode}
          setAircraftLocation={setAircraftLocation}
          aircraftLocation={aircraftLocation}
        />
      )
    },
    {
      component: (
        <TaxiClearance 
          aircraft={aircraft} 
          departureAirport={departureAirport}
          atisCode={atisCode}
          runway={departureRunway}
          aircraftLocation={aircraftLocation}
        />
      )
    },
    {
      component: (
        <BeforeDeparture 
          callSign={aircraft?.callSign} 
          runway={departureRunway}
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
    },
    {
      component: <Cruise />
    },
    {
      component: (
        <BeforeDestination 
          distanceToAirport={distanceToAirport} 
          destinationFrequency={destinationFrequency} 
        />
      )
    },
    {
      component: <TrafficPattern />
    },
    {
      component: <Approach />
    },
    {
      component: <Landing />
    },
    {
      component: <AfterLanding />
    }
  ];

  const handleNext = () => {
    setCurrentStep((prev) => {
      const nextStep = Math.min(prev + 1, steps.length - 1);
      setSelectedPhase(Object.keys(phaseToStepMap)[nextStep]);
      return nextStep;
    });
  };

  const handleBack = () => {
    setCurrentStep((prev) => {
      const prevStep = Math.max(prev - 1, 0);
      setSelectedPhase(Object.keys(phaseToStepMap)[prevStep]);
      return prevStep;
    });
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };
  const phaseToStepMap = {
    "Flight Setup": 0,
    "Taxi Clearance": 1,
    "Before Departure": 2,
    "Climb": 3,
    "Cruise": 4,
    "Before Destination": 5,
    "Traffic Pattern": 6,
    "Approach": 7,
    "Landing": 8,
    "After Landing": 9
  };

  const handlePhaseSelect = (phase) => {
    setSelectedPhase(phase);
    setDrawerOpen(false);
    setCurrentStep(phaseToStepMap[phase] || 0);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6"> {selectedPhase}</Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          { ["Flight Setup", "Taxi Clearance", "Before Departure", "Climb", "Cruise", "Before Destination", "Traffic Pattern","Approach",  "Landing", "After Landing"].map((phase) => (
            <MenuItem key={phase} onClick={() => handlePhaseSelect(phase)}>
              {phase}
            </MenuItem>
          ))}
        </Box>
      </Drawer>
      <Container sx={{ height: '100vh', width : '100%', display: 'flex', flexDirection: 'column' }}>
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
