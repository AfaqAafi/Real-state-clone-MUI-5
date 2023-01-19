import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";

import heroImg from "../media/hero_illustration.png";
import CustomButton from "./CustomButton";

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(5),

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "50px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(1, 0, 1, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "35px",
    },
  }));

  return (
    <>
      <Box sx={{ backgroundColor: "E6F0FF", minHeight: "80vh" }}>
        <Container>
          <Navbar />
          <CustomBox>
            <Box sx={{ flex: "1" }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "18px",
                  color: "#687690",
                  fontWight: "500",
                }}
              >
                Welcome to Besnik Agency
              </Typography>
              <Title> Discover a place where you'll love to live </Title>
              <Typography
                variant="body2"
                sx={{ fontSize: "18px", color: "#5A6473", my: 1 }}
              >
                Be first to get the best real estate deals before they hit the
                mass market! hot forclosuer deal with one simple search
              </Typography>
              <CustomButton
                backgroundColor="#0f184c"
                color="#fff"
                buttonText="More About Us"
                heroBtn={true}
              />
            </Box>
            <Box sx={{ flex: "1.25" }}>
              <img src={heroImg} alt="heroImg" style={{ width: "80%" }} />
            </Box>
          </CustomBox>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
