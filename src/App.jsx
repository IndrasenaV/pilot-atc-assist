import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Container, Button, Box } from "@mui/material";
import FlightSetup from "./components/FlightSetup";
import TaxiClearance from "./components/TaxiClearance";
import TowerCommunication from "./components/TowerCommunication";
import Departure from "./components/Departure";
import PhoneticText from "./components/PhoneticText";

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
        <TowerCommunication 
          callSign={aircraft?.callSign} 
          runway={runway}
          departureAirport={departureAirport}
        />
      )
    },
    {
      component: (
        <Departure 
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

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Pilot ATC Assistant</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        {/* Only show the current step's component */}
        {steps[currentStep].component}
        
        {/* Navigation buttons */}
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
