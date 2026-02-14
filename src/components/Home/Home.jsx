import { Box, Typography } from '@mui/material'
import React from 'react'
import "../../App.css"
import Image from "../../Image/figma pic.png"

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
          pt: "140px"
          

        }
      }>
        <Box>
          <Typography
          sx={{
            fontSize:"65px",
            fontWeight: "600",
            textAlign: "center",
            lineHeight: "140%",
            letterSpacing: "-1.5%"
          }}>
            I’m <span style={{
              color: "#FD853A"
            }}>Anshu</span> , <br /> Frontend Developer
          </Typography>

        </Box>
        <Box sx={
          {
            pt:"50px",
          }
        }>
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
              <img src= {Image} />
            </Box>

          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Home
