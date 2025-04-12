const airports = [
  {
    code: "KTKI",
    name: "McKinney National",
    ground: "McKinney Ground",
    tower: "McKinney Tower",
    isTowered: true,
    frequencies: {
      tower: "118.825",
      ground: "121.875",
      atis: "119.925",
      ctaf: "118.825" // Same as tower for towered airports
    },
    runways: ["18", "36"],
    aircraftLocations: ["North tiedowns", "South side of airport", "North side of runway 18", "South side of runway 18", "North side of runway 36", "South side of runway 36"],
    taxiways: [
      "A", "A1", "A2", "A3", "A4", "A5", "A6",
      "B", "B1", "B2", "B3", "B4", "B5", "B6",
      "C", "C1", "C2", "C3",
      "D", "D1", "D2"
    ]
  },
  {
    code: "T31",
    name: "Aero Country",
    ground: "Aero Country Traffic",
    tower: "Aero Country Traffic",
    isTowered: false,
    frequencies: {
      tower: "122.9",
      ground: "122.9",
      atis: "NA",
      ctaf: "122.9" // Same as tower for towered airports
    },
    runways: ["17", "35"],
    aircraftLocations: ["North side of airport", "South side of airport", "North side of runway 18", "South side of runway 18", "North side of runway 36", "South side of runway 36"],
    taxiways: [
      "A"
    ]
  },
  {
    code: "7F3",
    name: "Caddo Mills Municipal",
    ground: "Caddo Mills Municipal Traffic",
    tower: "Caddo Mills Municipal Traffic",
    isTowered: false,
    frequencies: {
      tower: "122.8",
      ground: "122.8",
      atis: "NA",
      ctaf: "122.8" // Same as tower for towered airports
    },
    runways: ["13", "31", "18", "36"],
    aircraftLocations: ["North side of airport", "South side of airport", "North side of runway 18", "South side of runway 18", "North side of runway 36", "South side of runway 36"],
    taxiways: [
      "A"
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
  // ... other airport objects ...
];

export default airports; 