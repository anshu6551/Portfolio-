import {
  Box,
  Button,
  Container,
  Typography,
  Drawer,
  IconButton
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import "../../App.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const sections = ["home", "about", "service", "resume", "project", "contact"];

  // Scroll Spy
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sections]);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
      setOpen(false);
    }
  };

  const navButtonStyle = (id) => ({
    bgcolor: active === id ? "#FD853A" : "transparent",
    color: active === id ? "white" : "#ccc",
    px: "30px",
    py: 1,
    borderRadius: "24px",
    fontWeight: 500,
    fontSize: "20px",
    textTransform: "none",
    fontFamily: "Montserrat",
    transition: "all 0.3s ease",
    "&:hover": {
      bgcolor: active === id ? "#FD853A" : "#1a1a1a",
      color: "white"
    }
  });

  return (
    <Box
      sx={{
        position: "fixed",
        top: 20,
        width: "100%",
        zIndex: 999
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
            justifyContent: "space-between"
          }}
        >
          {/* LEFT MENU */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1
            }}
          >
            <Button onClick={() => scrollTo("home")} sx={navButtonStyle("home")}>
              Home
            </Button>

            <Button onClick={() => scrollTo("about")} sx={navButtonStyle("about")}>
              About
            </Button>

            <Button onClick={() => scrollTo("service")} sx={navButtonStyle("service")}>
              Service
            </Button>
          </Box>

          {/* LOGO */}
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
                fontSize: "14px"
              }}
            >
              JC
            </Box>
            <Typography
              sx={{
                color: "white",
                fontWeight: 600,
                fontSize: "28px",
                fontFamily: "Montserrat"
              }}
            >
              JCREA
            </Typography>
          </Box>

          {/* RIGHT MENU */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1
            }}
          >
            <Button onClick={() => scrollTo("resume")} sx={navButtonStyle("resume")}>
              Resume
            </Button>

            <Button onClick={() => scrollTo("project")} sx={navButtonStyle("project")}>
              Project
            </Button>

            <Button onClick={() => scrollTo("contact")} sx={navButtonStyle("contact")}>
              Contact
            </Button>
          </Box>

          {/* MOBILE MENU ICON */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Box>
      </Container>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 250,
            bgcolor: "#0f0f0f",
            height: "100%",
            p: 3
          }}
        >
          {sections.map((item) => (
            <Button
              key={item}
              fullWidth
              onClick={() => scrollTo(item)}
              sx={{
                bgcolor: active === item ? "#FD853A" : "transparent",
                color: active === item ? "white" : "#ccc",
                borderRadius: "12px",
                fontSize: "18px",
                textTransform: "none",
                fontFamily: "Montserrat",
                justifyContent: "flex-start",
                mb: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: active === item ? "#FD853A" : "#1a1a1a",
                  color: "white"
                }
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Button>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
}