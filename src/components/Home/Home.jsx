import { Box, Typography } from '@mui/material'
import React from 'react'
import "../../App.css"
import Image from "../../Image/figma pic.png"
import StarIcon from "@mui/icons-material/Star";
import Service from '../Service/Service';
import About from '../About/About';
import Hire from '../Hire/Hire';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <>
      <Box sx={
        {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          flexDirection: "column",
          pt: "140px",
          backgroundColor: "#fff"


        }
      }
      id="home"
      >
        <Box>
          <Typography
            sx={{
              fontSize: "65px",
              fontWeight: "600",
              textAlign: "center",
              lineHeight: "140%",
              letterSpacing: "-1.5%",
              fontFamily: "Montserrat"
            }}>
            I’m <span style={{
              color: "#FEB273"
            }}>Anshu</span> , <br /> Frontend Developer
          </Typography>

        </Box>
        <Box sx={
          {
            pt: "50px",
            position: "relative"
          }
        }>
          <Box>
            <Typography sx={{ position: "absolute", top: "210px", left: "-280px", maxWidth: "270px", color: "#344054", fontSize: "20px", fontWeight: "500", lineHeight: "120%", letterSpacing: "-1.5%", fontFamily: "Montserrat" }}>
              Anshu’s frontend expertise transformed our vision into a seamless and engaging web experience.”
            </Typography>
            <Box sx={{ position: "absolute", top: "210px", right: "-300px" }}>

              {/* Stars */}
              <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
                <StarIcon sx={{ color: "#ff9800", fontSize: 23 }} />
                <StarIcon sx={{ color: "#ff9800", fontSize: 23 }} />
                <StarIcon sx={{ color: "#ff9800", fontSize: 23 }} />
                <StarIcon sx={{ color: "#ff9800", fontSize: 23 }} />
                <StarIcon sx={{ color: "#ff9800", fontSize: 23 }} />
              </Box>

              {/* Text */}
              <Typography
                sx={{
                  maxWidth: "350px",
                  color: "#000",
                  fontSize: "24px",
                  fontWeight: 700,
                  lineHeight: "120%",
                  letterSpacing: "-1.5%",
                  fontFamily: "Montserrat",
                  textAlign: "right"
                }}
              >
                5+ Projects Completed
              </Typography>

            </Box>
          </Box>
          <Box sx={{
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            backgroundColor: "#FEB273",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start"
          }}>
            <Box>
              <img src={Image} alt='' />
            </Box>

          </Box>
        </Box>
      </Box>
      
      
    </>
  )
}

export default Home
