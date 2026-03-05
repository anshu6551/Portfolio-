import React from "react";
import { Box, Typography, Container } from "@mui/material";

const journeyData = [
  {
    leftTitle: "Webskitters Academy",
    leftDate: "Aug 2023 – Feb 2025",
    rightTitle: "Frontend Development Learner",
    rightDesc:
      "Completed frontend development training at Webskitters Academy, building a strong foundation in HTML, CSS, and JavaScript while gaining hands-on experience with React.js, Next.js, and Material UI to develop responsive and modern web applications."
  },
  {
    leftTitle: "Personal Projects",
    leftDate: "Jan 2025 – Mar 2025",
    rightTitle: "React & UI Developer",
    rightDesc:
      "Built multiple real-world frontend projects to apply development skills, focusing on responsive layouts, reusable components, and modern UI practices."
  },
  {
    leftTitle: "Intership at Elite Tech Intern",
    leftDate: " Apr 2025 – July 2025",
    rightTitle: "React js Intern",
    rightDesc:
      "Worked on real-world React projects, improving UI consistency, implementing animations, optimizing performance, and collaborating in a professional development environment."
  },
  {
    leftTitle: "Continuous Skill Growth",
    leftDate: "July 2025 – Present",
    rightTitle: "Frontend / Full-Stack Developer",
    rightDesc:
      "Currently expanding development capabilities by learning backend technologies including Node.js, Express.js, and Docker, while developing full-stack applications and strengthening knowledge of modern web development practices."
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
                  display: { xs: "none", md: "block" }
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