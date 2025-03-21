import React, { useState, useEffect } from "react";
import { TextField, MenuItem, FormControl, InputLabel, Select, Grid, Typography } from "@mui/material";

const airports = [
  {
    code: "KTKI",
    name: "McKinney National",
    ground: "McKinney Ground",
    tower: "McKinney Tower",
    isTowered: true,
    frequencies: {
      tower: "118.55",
      ground: "121.6",
      atis: "120.175",
      ctaf: "118.55" // Same as tower for towered airports
    },
    runways: ["18","36"],
    aircraftLocations : ["North side of airport","South side of airport","North side of runway 18","South side of runway 18","North side of runway 36","South side of runway 36"],
    taxiways: [
      "A", "A1", "A2", "A3", "A4", "A5","A6",
      "B", "B1", "B2", "B3", "B4", "B5", "B6",
      "C", "C1", "C2", "C3",
      "D", "D1", "D2"
    ]
  },
  { 
    code: "KDFW", 
    name: "Dallas/Fort Worth International",
    ground: "DFW Ground",
    tower: "DFW Tower",
    isTowered: true,
    frequencies: {
      tower: "124.15",
      ground: "121.65",
      atis: "134.9",
      clearance: "128.25",
      approach: "125.35"
    },
    runways: ["18L", "36R", "18R", "36L", "17L", "35R", "17C", "35C", "17R", "35L", "13L", "31R", "13R", "31L"],
    aircraftLocations: [
      "Terminal A gates",
      "Terminal B gates", 
      "Terminal C gates",
      "Terminal D gates",
      "Terminal E gates",
      "North cargo area",
      "South cargo area",
      "General aviation ramp",
      "Corporate aviation area"
    ],
    taxiways: [
      "A", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10", "A11", "A12", "A13", "A14", "A15", "A16", "A17",
      "B", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10", "B11", "B12", "B14", "B15", "B16",
      "C", "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10", "C11", "C12", "C13", "C14", "C15",
      "D", "D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10",
      "E", "E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9",
      "F", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8",
      "G", "G1", "G2", "G3", "G4", "G5",
      "H", "H1", "H2", "H3", "H4", "H5", "H6",
      "J", "J1", "J2", "J3", "J4",
      "K", "K1", "K2", "K3", "K4", "K5", "K6",
      "L", "L1", "L2", "L3", "L4",
      "M", "M1", "M2", "M3", "M4",
      "N", "N1", "N2", "N3", "N4",
      "P", "P1", "P2", "P3",
      "R", "R1", "R2", "R3",
      "S", "S1", "S2", "S3",
      "T", "T1", "T2",
      "Y", "Y1", "Y2",
      "Z", "Z1", "Z2"
    ]
  },
  { 
    code: "KDAL", 
    name: "Dallas Love Field",
    ground: "Love Ground",
    tower: "Love Tower",
    isTowered: true,
    frequencies: {
      tower: "118.7",
      ground: "121.7",
      atis: "134.9",
      clearance: "128.25"
    },
    runways: ["13L", "31R", "13R", "31L", "18", "36"],
    aircraftLocations: [
      "Terminal 1 gates",
      "Terminal 2 gates",
      "Southwest Airlines maintenance area",
      "General aviation ramp",
      "Business jet center ramp",
      "North ramp area",
      "South ramp area"
    ],
    taxiways: [
      "A", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9",
      "B", "B1", "B2", "B3", "B4", "B5", "B6", "B7",
      "C", "C1", "C2", "C3", "C4", "C5",
      "D", "D1", "D2", "D3", "D4",
      "E", "E1", "E2", "E3",
      "L", "L1", "L2",
      "M", "M1", "M2",
      "P", "P1", "P2"
    ]
  },
  { 
    code: "KADS", 
    name: "Addison Airport",
    ground: "Addison Ground",
    tower: "Addison Tower",
    runways: ["15", "33"],
    aircraftLocations: [
      "Atlantic Aviation ramp",
      "Million Air ramp",
      "North ramp area",
      "South ramp area",
      "East side hangars",
      "West side hangars"
    ],
    taxiways: [
      "A", "A1", "A2", "A3", "A4", "A5",
      "B", "B1", "B2", "B3", "B4",
      "C", "C1", "C2", "C3",
      "D", "D1", "D2"
    ]
  },
  { 
    code: "KFTW", 
    name: "Fort Worth Meacham International",
    ground: "Meacham Ground",
    tower: "Meacham Tower",
    runways: ["16", "34", "17", "35"],
    aircraftLocations: [
      "Texas Jet ramp",
      "American Aero ramp",
      "North ramp area",
      "South ramp area",
      "East side hangars",
      "West side hangars"
    ],
    taxiways: [
      "A", "A1", "A2", "A3", "A4", "A5",
      "B", "B1", "B2", "B3", "B4",
      "C", "C1", "C2", "C3",
      "D", "D1", "D2",
      "E", "E1", "E2",
      "F", "F1", "F2"
    ]
  },
  { 
    code: "KAFW", 
    name: "Fort Worth Alliance",
    ground: "Alliance Ground",
    tower: "Alliance Tower",
    runways: ["16L", "34R", "16R", "34L"],
    aircraftLocations: [
      "North cargo ramp",
      "South cargo ramp",
      "General aviation ramp",
      "FedEx ramp",
      "Amazon ramp",
      "West side hangars",
      "East side hangars"
    ],
    taxiways: [
      "A", "A1", "A2", "A3", "A4", "A5", "A6",
      "B", "B1", "B2", "B3", "B4", "B5",
      "C", "C1", "C2", "C3", "C4",
      "D", "D1", "D2", "D3",
      "E", "E1", "E2", "E3",
      "F", "F1", "F2",
      "G", "G1", "G2",
      "H", "H1", "H2"
    ]
  },
  { 
    code: "KGKY", 
    name: "Arlington Municipal",
    ground: "Arlington Ground",
    tower: "Arlington Tower",
    runways: ["16", "34"],
    aircraftLocations: [
      "Main terminal ramp",
      "North general aviation ramp",
      "South general aviation ramp",
      "East side hangars",
      "West side hangars"
    ],
    taxiways: [
      "A", "A1", "A2", "A3", "A4",
      "B", "B1", "B2", "B3",
      "C", "C1", "C2",
      "D", "D1", "D2"
    ]
  },
  {
    code: "KGYI",
    name: "North Texas Regional Airport/Grayson County",
    ground: "Grayson Ground",
    tower: "Grayson Tower",
    isTowered: true,
    frequencies: {
      tower: "119.9",
      ground: "121.7",
      atis: "120.775",
      ctaf: "119.9"
    },
    runways: ["17L", "35R", "17R", "35L"],
    aircraftLocations: [
      "Main terminal ramp",
      "North general aviation area",
      "South general aviation area",
      "East side hangars",
      "West side hangars"
    ],
    taxiways: ["A", "A1", "A2", "A3", "B", "B1", "B2", "C", "C1", "D", "D1"]
  },
  {
    code: "KDTO",
    name: "Denton Enterprise",
    ground: "Denton Ground",
    tower: "Denton Tower",
    runways: ["18/36", "17/35"],
    taxiways: ["A", "A1", "A2", "A3", "B", "B1", "B2", "C", "C1", "C2", "D", "D1"]
  },
  {
    code: "KXBP",
    name: "Bridgeport Municipal",
    ground: "Bridgeport Ground",
    tower: "Bridgeport Tower",
    runways: ["17/35"],
    taxiways: ["A", "A1", "A2", "B", "B1", "C"]
  },
  {
    code: "KLUD",
    name: "Decatur Municipal",
    ground: "Decatur Ground",
    tower: "Decatur Tower",
    runways: ["17/35"],
    taxiways: ["A", "A1", "B", "B1", "C"]
  },
  {
    code: "KGVT",
    name: "Majors Airport",
    ground: "Majors Ground",
    tower: "Majors Tower",
    runways: ["17/35", "14/32"],
    taxiways: ["A", "A1", "A2", "B", "B1", "C", "C1"]
  },
  {
    code: "KCRS",
    name: "Corsicana Municipal",
    ground: "Corsicana Ground",
    tower: "Corsicana Tower",
    runways: ["14/32"],
    taxiways: ["A", "A1", "B", "B1", "C"]
  },
  {
    code: "KSLR",
    name: "Sulphur Springs Municipal",
    ground: "Sulphur Ground",
    tower: "Sulphur Tower",
    runways: ["18/36"],
    taxiways: ["A", "A1", "B", "B1", "C"]
  },
  {
    code: "KMWL",
    name: "Mineral Wells Airport",
    ground: "Mineral Wells Ground",
    tower: "Mineral Wells Tower",
    runways: ["13/31", "17/35"],
    taxiways: ["A", "A1", "A2", "B", "B1", "C", "C1"]
  },
  {
    code: "KGPM",
    name: "Grand Prairie Municipal",
    ground: "Grand Prairie Ground",
    tower: "Grand Prairie Tower",
    runways: ["17/35"],
    taxiways: ["A", "A1", "A2", "B", "B1", "C", "C1"]
  },
  {
    code: "KRBD",
    name: "Dallas Executive",
    ground: "Executive Ground",
    tower: "Executive Tower",
    runways: ["13/31", "17/35"],
    taxiways: ["A", "A1", "A2", "B", "B1", "B2", "C", "C1"]
  },
  {
    code: "KTRM",
    name: "Terrell Municipal",
    ground: "Terrell Ground",
    tower: "Terrell Tower",
    runways: ["17/35"],
    taxiways: ["A", "A1", "B", "B1", "C"]
  },
  {
    code: "KLNC",
    name: "Lancaster Regional",
    ground: "Lancaster Ground",
    tower: "Lancaster Tower",
    runways: ["13/31"],
    taxiways: ["A", "A1", "A2", "B", "B1", "C"]
  },
  {
    code: "KSWI",
    name: "Sherman Municipal",
    ground: "Sherman Ground",
    tower: "Sherman Tower",
    runways: ["16/34"],
    taxiways: ["A", "A1", "B", "B1", "C"]
  },
  {
    code: "KGLE",
    name: "Gainesville Municipal",
    ground: "Gainesville Ground",
    tower: "Gainesville Tower",
    runways: ["17/35"],
    taxiways: ["A", "A1", "B", "B1", "C"]
  },
  {
    code: "KJWY",
    name: "Mid-Way Regional",
    ground: "Mid-Way Ground",
    tower: "Mid-Way Tower",
    runways: ["18/36"],
    taxiways: ["A", "A1", "B", "B1", "C"]
  },
  {
    code: "KCPT",
    name: "Cleburne Regional",
    ground: "Cleburne Ground",
    tower: "Cleburne Tower",
    runways: ["15/33"],
    taxiways: ["A", "A1", "A2", "B", "B1", "C"]
  },
  {
    code: "KGDJ",
    name: "Granbury Regional",
    ground: "Granbury Ground",
    tower: "Granbury Tower",
    runways: ["14/32"],
    taxiways: ["A", "A1", "B", "B1", "C"]
  },
  {
    code: "KHQZ",
    name: "Mesquite Metro",
    ground: "Mesquite Ground",
    tower: "Mesquite Tower",
    runways: ["17/35"],
    taxiways: ["A", "A1", "A2", "B", "B1", "C", "C1"]
  }
];

const aircraft = [
  { 
    callSign: "Cessna 739TS",
    type: "C172",
    vSpeeds: {
      vR: 55, // Rotation speed
      vX: 62, // Best angle of climb
      vY: 74, // Best rate of climb
      vA: 76, // Maneuvering speed
      vBG: 65, // Best glide
      vFE: 85, // Maximum flap extended speed
      vNO: 129, // Maximum structural cruising speed
      vNE: 163, // Never exceed speed
      vS0: 40, // Stall speed in landing configuration
      vS1: 48, // Stall speed in clean configuration
      cruiseSpeed: 122, // Normal cruise speed
      finalApproach: 65 // Final approach speed
    }
  },
  { 
    callSign: "Cessna 20015",
    type: "C172",
    vSpeeds: {
      vR: 55,
      vX: 62,
      vY: 74,
      vA: 76,
      vBG: 65,
      vFE: 85,
      vNO: 129,
      vNE: 163,
      vS0: 40,
      vS1: 48,
      cruiseSpeed: 122,
      finalApproach: 65
    }
  },
  { 
    callSign: "Cessna 734BU",
    type: "C172",
    vSpeeds: {
      vR: 55,
      vX: 62,
      vY: 74,
      vA: 76,
      vBG: 65,
      vFE: 85,
      vNO: 129,
      vNE: 163,
      vS0: 40,
      vS1: 48,
      cruiseSpeed: 122,
      finalApproach: 65
    }
  },
  { callSign: "Cessna 73910",
    type: "C172",
    vSpeeds: {
      vR: 55,
      vX: 62,
      vY: 74,
      vA: 76,
      vBG: 65,
      vFE: 85,
      vNO: 129,
      vNE: 163,
      vS0: 40,
      vS1: 48,
      cruiseSpeed: 122,
      finalApproach: 65
    } },
  { callSign: "Cessna 734PU",
    type: "C172",
    vSpeeds: {
      vR: 55,
      vX: 62,
      vY: 74,
      vA: 76,
      vBG: 65,
      vFE: 85,
      vNO: 129,
      vNE: 163,
      vS0: 40,
      vS1: 48,
      cruiseSpeed: 122,
      finalApproach: 65
    } },
  { callSign: "Cessna 9469H",
    type: "C172",
    vSpeeds: {
      vR: 55,
      vX: 62,
      vY: 74,
      vA: 76,
      vBG: 65,
      vFE: 85,
      vNO: 129,
      vNE: 163,
      vS0: 40,
      vS1: 48,
      cruiseSpeed: 122,
      finalApproach: 65
    } },
  { callSign: "Cessna 22708",
    type: "C172",
    vSpeeds: {
      vR: 55,
      vX: 62,
      vY: 74,
      vA: 76,
      vBG: 65,
      vFE: 85,
      vNO: 129,
      vNE: 163,
      vS0: 40,
      vS1: 48,
      cruiseSpeed: 122,
      finalApproach: 65
    } },
  { 
    callSign: "Diamond 33779",
    type: "DA40",
    vSpeeds: {
      vR: 57, // Rotation speed
      vX: 66, // Best angle of climb
      vY: 75, // Best rate of climb
      vA: 108, // Maneuvering speed
      vBG: 88, // Best glide
      vFE: 108, // Maximum flap extended speed
      vNO: 129, // Maximum structural cruising speed
      vNE: 178, // Never exceed speed
      vS0: 49, // Stall speed in landing configuration
      vS1: 54, // Stall speed in clean configuration
      cruiseSpeed: 150, // Normal cruise speed
      finalApproach: 73 // Final approach speed
    }
  }
];

const FlightSetup = ({ 
  setAircraft,
  setRunway, 
  setAltitude, 
  setGroundStation, 
  setDepartureAirport,
  setArrivalAirport,
  setAtisCode,
  setAircraftLocation
}) => {
  const [departure, setDeparture] = useState("KTKI");
  const [arrival, setArrival] = useState("");
  const [departureGround, setDepartureGround] = useState("McKinney Ground");
  const [departureTower, setDepartureTower] = useState("McKinney Tower");
  const [selectedDepartureAirport, setSelectedDepartureAirport] = useState(airports[0]);
  const [selectedArrivalAirport, setSelectedArrivalAirport] = useState(null);
  const [atisCode, setLocalAtisCode] = useState("");
  const [selectedAircraft, setSelectedAircraft] = useState(aircraft[0].callSign);
  const [selectedLocation, setSelectedLocation] = useState("");

  // Set initial departure airport on component mount
  useEffect(() => {
    setDepartureAirport(airports[0]); // Set the default KTKI airport object
  }, [setDepartureAirport]);

  // Set default aircraft on component mount
  useEffect(() => {
    setAircraft(aircraft[0]);
  }, [setAircraft]);

  const handleDepartureAirportChange = (event) => {
    const selected = airports.find((ap) => ap.code === event.target.value);
    setDeparture(selected.code);
    setDepartureGround(selected.ground);
    setGroundStation(selected.ground);
    setDepartureTower(selected.tower);
    setSelectedDepartureAirport(selected);
    setDepartureAirport(selected); // Passing the entire airport object
  };

  const handleArrivalAirportChange = (event) => {
    const selected = airports.find((ap) => ap.code === event.target.value);
    setArrival(selected.code);
    setSelectedArrivalAirport(selected);
    setArrivalAirport(selected.code);
  };

  const handleAircraftChange = (event) => {
    setSelectedAircraft(event.target.value);
    const selectedAc = aircraft.find(ac => ac.callSign === event.target.value);
    setAircraft(selectedAc);
  };

  const handleAtisChange = (e) => {
    const newAtis = e.target.value.toUpperCase();
    setLocalAtisCode(newAtis);
    setAtisCode(newAtis);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
    setAircraftLocation(event.target.value);
  };

  return (
    <>
      <h2>Flight Setup</h2>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Aircraft</InputLabel>
            <Select 
              value={selectedAircraft}
              onChange={handleAircraftChange}
            >
              {aircraft.map((ac) => (
                <MenuItem key={ac.callSign} value={ac.callSign}>
                  {ac.callSign}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        
        {/* Add this new section after aircraft selection and before departure airport */}
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Aircraft Location</InputLabel>
            <Select
              value={selectedLocation}
              onChange={handleLocationChange}
              disabled={!selectedDepartureAirport}
            >
              {selectedDepartureAirport?.aircraftLocations?.map((location) => (
                <MenuItem key={location} value={location}>
                  {location}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Departure Airport Section */}
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>Departure</Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Departure Airport</InputLabel>
            <Select value={departure} onChange={handleDepartureAirportChange}>
              {airports.map((airport) => (
                <MenuItem key={airport.code} value={airport.code}>
                  {airport.code} - {airport.name} {!airport.isTowered && "(Non-Towered)"}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <TextField 
            fullWidth 
            label="Ground" 
            value={selectedDepartureAirport?.frequencies?.ground || 'N/A'} 
            disabled 
          />
        </Grid>
        <Grid item xs={3}>
          <TextField 
            fullWidth 
            label="Tower" 
            value={selectedDepartureAirport?.frequencies?.tower || 'N/A'} 
            disabled 
          />
        </Grid>
        <Grid item xs={3}>
          <TextField 
            fullWidth 
            label="ATIS" 
            value={selectedDepartureAirport?.frequencies?.atis || 'N/A'} 
            disabled 
          />
        </Grid>
        <Grid item xs={3}>
          <TextField 
            fullWidth 
            label={selectedDepartureAirport?.isTowered ? "Clearance" : "CTAF"} 
            value={selectedDepartureAirport?.frequencies?.clearance || selectedDepartureAirport?.frequencies?.ctaf || 'N/A'} 
            disabled 
          />
        </Grid>

        {/* Modified ATIS Code section */}
        <Grid item xs={12}>
          <TextField 
            fullWidth 
            label="Current ATIS Code" 
            value={atisCode}
            onChange={handleAtisChange}
            inputProps={{ 
              maxLength: 1,
              style: { textTransform: 'uppercase' }
            }}
          />
        </Grid>

        {/* Arrival Airport Section */}
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>Arrival</Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Arrival Airport</InputLabel>
            <Select value={arrival} onChange={handleArrivalAirportChange}>
              {airports.map((airport) => (
                <MenuItem key={airport.code} value={airport.code}>
                  {airport.code} - {airport.name} {!airport.isTowered && "(Non-Towered)"}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        {selectedArrivalAirport && (
          <>
            <Grid item xs={3}>
              <TextField 
                fullWidth 
                label="Ground" 
                value={selectedArrivalAirport?.frequencies?.ground || 'N/A'} 
                disabled 
              />
            </Grid>
            <Grid item xs={3}>
              <TextField 
                fullWidth 
                label="Tower" 
                value={selectedArrivalAirport?.frequencies?.tower || 'N/A'} 
                disabled 
              />
            </Grid>
            <Grid item xs={3}>
              <TextField 
                fullWidth 
                label="ATIS" 
                value={selectedArrivalAirport?.frequencies?.atis || 'N/A'} 
                disabled 
              />
            </Grid>
            <Grid item xs={3}>
              <TextField 
                fullWidth 
                label={selectedArrivalAirport?.isTowered ? "Clearance" : "CTAF"} 
                value={selectedArrivalAirport?.frequencies?.clearance || selectedArrivalAirport?.frequencies?.ctaf || 'N/A'} 
                disabled 
              />
            </Grid>
          </>
        )}

        {/* Flight Parameters */}
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>Flight Parameters</Typography>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Departure Runway</InputLabel>
            <Select onChange={(e) => setRunway(e.target.value)}>
              {selectedDepartureAirport?.runways.map((runway) => (
                <MenuItem key={runway} value={runway}>{runway}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Cruising Altitude</InputLabel>
            <Select onChange={(e) => setAltitude(e.target.value)}>
              {[3000, 5000, 7000, 10000, 12000, 15000].map((alt) => (
                <MenuItem key={alt} value={alt}>{alt} feet</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default FlightSetup;
