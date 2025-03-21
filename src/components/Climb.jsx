import React from "react";
import { Typography } from "@mui/material";

const Climb = ({ callSign, altitude }) => {
  return (
    <>
      <h2>Departure</h2>
      <Typography>
        "Departure, {callSign}, climbing to {altitude} feet."
      </Typography>
    </>
  );
};

export default Climb;
