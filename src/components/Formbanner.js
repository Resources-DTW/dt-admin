import { Grid } from "@mui/material";
import React from "react";
import img1 from "../assests/Img1.png";

export default function Formbanner() {
  return (
    <>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${img1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "70%",
          backgroundPosition: "center",
          backgroundColor: "#FFFFFF",
          borderRadius: "10px",
          paddingTop: "22%",
          paddingBottom: "22%",
        }}
      />
    </>
  );
}
