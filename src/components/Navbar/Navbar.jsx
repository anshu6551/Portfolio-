// Navbar.jsx
import { Box, Button, Container, Typography } from "@mui/material";
import "../../App.css"

export default function Navbar() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 20,
        width: "100%",
        zIndex: 999,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            bgcolor: "#0f0f0f",
            borderRadius: "50px",
            px: 3,
            py: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left Menu */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Button
              sx={{
                bgcolor: "#FD853A",
                color: "white",
                px: 3,
                py: 2,
                borderRadius: "24px",
                fontWeight: 500,
                fontSize: "20px",
                textTransform: "none",
                lineHeight: "100%",
                letterSpacing: "-1.5%",
                fontFamily: "Montserrat",
                fontStyle: "regular",
                "&:hover": { bgcolor: "#ff6f00" },
              }}
            >
              Home
            </Button>

            {["About", "Service"].map((item) => (
              <Button
                key={item}
                sx={{
                  px: "30px",
                  color: "#ccc",
                  fontSize: "20px",
                  textTransform: "none",
                  lineHeight: "100%",
                  letterSpacing: "-1.5%",
                  fontFamily: "Montserrat",
                  fontStyle: "regular"



                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Center Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 28,
                height: 28,
                bgcolor: "#ff8a00",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: "14px",
              }}
            >
              JC
            </Box>
            <Typography sx={{
              color: "white",
              fontWeight: 600,
              fontSize: "28px",
              textTransform: "none",
              lineHeight: "100%",
              letterSpacing: "-1.5%",
              fontFamily: "Montserrat",
              fontStyle: "regular"
            }}>
              JCREA
            </Typography>
          </Box>

          {/* Right Menu */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {["Resume", "Project", "Contact"].map((item) => (
              <Button
                key={item}
                sx={{
                  px: "30px",
                  color: "#ccc",
                  fontSize: "20px",
                  textTransform: "none",
                  lineHeight: "100%",
                  letterSpacing: "-1.5%",
                  fontFamily: "Montserrat",
                  fontStyle: "regular",

                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
