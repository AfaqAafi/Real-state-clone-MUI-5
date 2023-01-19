import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import fbIcon from "../media/fbicon.png";
import twitterIcon from "../media/twittericon.png";
import linkedinIcon from "../media/linkedinicon.png";

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("div")(({ theme }) => ({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
    margin: theme.spacing(0, 0, 1, 0),
    cursor: "pointer",
    "&hover": {
      color: "#000",
    },
  }));

  return (
    <Box sx={{ py: 8 }}>
      <CustomContainer>
        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1c1c1d",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Products
          </Typography>
          <FooterLink>Listing</FooterLink>
          <FooterLink>Properties</FooterLink>
          <FooterLink>Agents</FooterLink>
          <FooterLink>Blog</FooterLink>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1c1c1d",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Resources
          </Typography>
          <FooterLink>Our Homes</FooterLink>
          <FooterLink>Stories</FooterLink>
          <FooterLink>Video</FooterLink>
          <FooterLink>Free Trial</FooterLink>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1c1c1d",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Get in touch
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#7a7a7e",
              fontWeight: "700",
              mb: 2,
            }}
          >
            You'll find your next home, in any style you prefer!
          </Typography>
          <IconBox>
            <img src={fbIcon} alt="fbIcon" />
            <img src={twitterIcon} alt="fbIcon" />
            <img src={linkedinIcon} alt="fbIcon" />
          </IconBox>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
