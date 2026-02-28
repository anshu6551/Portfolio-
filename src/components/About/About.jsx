import React from "react";
import { Box, Typography, Container } from "@mui/material";

const journeyData = [
  {
    leftTitle: "Webskitters Academy",
    leftDate: "Jan 2022 – Dec 2022",
    rightTitle: "Frontend Development Learner",
    rightDesc:
      "Started learning HTML, CSS, JavaScript and built responsive websites to understand core web fundamentals."
  },
  {
    leftTitle: "Personal Projects",
    leftDate: "Jan 2023 – Dec 2023",
    rightTitle: "React & UI Developer",
    rightDesc:
      "Built multiple responsive projects using React and Material UI, focusing on clean design and user experience."
  },
  {
    leftTitle: "Continuous Skill Growth",
    leftDate: "2024 – Present",
    rightTitle: "Frontend Developer",
    rightDesc:
      "Developing advanced portfolio projects and improving UI consistency, animations and performance."
  }
];

export default function About() {
  return (
    <Box sx={{ backgroundColor: "#fff", py: 5 }} id="about">
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography
          align="center"
          sx={{
            fontWeight: 700,
            mb: 8,
            fontFamily: "Montserrat",
            fontSize: "40px"
          }}
        >
          My <span style={{ color: "#ff7a00" }}>Journey</span>
        </Typography>

        {/* Timeline Wrapper */}
        <Box sx={{ position: "relative" }}>
          {/* Center Vertical Line */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: "50%", md: "50%" },
              top: 0,
              bottom: 0,
              width: "2px",
              backgroundColor: "#d1d5db",
              transform: "translateX(-50%)"
            }}
          />

          {journeyData.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 8,
                position: "relative",
                flexDirection: { xs: "column", md: "row" }
              }}
            >
              {/* Left Content */}
              <Box
                sx={{
                  width: { xs: "100%", md: "45%" },
                  textAlign: { xs: "center", md: "left" },
                  pr: { md: 4 },
                  mb: { xs: 2, md: 0 }
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "28px",
                    fontFamily: "Montserrat",
                    color: "#344054",
                    lineHeight: "120%"
                  }}
                >
                  {item.leftTitle}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontFamily: "Montserrat",
                    color: "#667085",
                    lineHeight: "120%"
                  }}
                >
                  {item.leftDate}
                </Typography>
              </Box>

              {/* Premium Timeline Dot */}
              <Box
                sx={{
                  position: "relative",
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background:
                    index % 2 === 0
                      ? "linear-gradient(135deg,#ff7a00,#ff9f43)"
                      : "linear-gradient(135deg,#0d1b2a,#1b263b)",
                  boxShadow:
                    index % 2 === 0
                      ? "0 0 0 4px #fff, 0 0 20px rgba(255,122,0,0.4)"
                      : "0 0 0 4px #fff, 0 0 20px rgba(13,27,42,0.4)",
                  zIndex: 2,
                  my: { xs: 2, md: 0 },
                  flexShrink: 0,
                  display:{xs:"none",md:"block"}
                }}
              />

              {/* Right Content */}
              <Box
                sx={{
                  width: { xs: "100%", md: "45%" },
                  textAlign: { xs: "center", md: "right" },
                  pl: { md: 4 },
                  mt: { xs: 2, md: 0 }
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "28px",
                    fontFamily: "Montserrat",
                    color: "#344054",
                    lineHeight: "120%"
                  }}
                >
                  {item.rightTitle}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontFamily: "Montserrat",
                    color: "#667085",
                    lineHeight: "120%"
                  }}
                >
                  {item.rightDesc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}