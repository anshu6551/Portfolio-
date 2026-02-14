import { Box, Typography, Button, Container, Stack } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        bgcolor: "#f2f2f2",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        pt: 10,
      }}
    >
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", md: "row" }} spacing={5} alignItems="center">
          
          {/* LEFT TEXT */}
          <Box flex={1}>
            <Typography
              sx={{
                bgcolor: "white",
                display: "inline-block",
                px: 2,
                py: 0.5,
                borderRadius: 20,
                fontSize: 14,
              }}
            >
              Hello!
            </Typography>

            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2.2rem", md: "3.8rem" },
                mt: 2,
              }}
            >
              I'm <span style={{ color: "#ff8a00" }}>Jenny</span>, <br />
              Product Designer
            </Typography>

            <Typography sx={{ color: "gray", mt: 2 }}>
              Jenny’s exceptional product design ensures our website’s success.
              Highly recommended.
            </Typography>

            <Stack direction="row" spacing={2} mt={3}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#ff8a00",
                  borderRadius: 30,
                  px: 3,
                  "&:hover": { bgcolor: "#ff6f00" },
                }}
              >
                Portfolio
              </Button>

              <Button variant="outlined" sx={{ borderRadius: 30 }}>
                Hire Me
              </Button>
            </Stack>
          </Box>

          {/* RIGHT IMAGE */}
          <Box flex={1} sx={{ position: "relative", display: "flex", justifyContent: "center" }}>
            {/* Orange Circle */}
            <Box
              sx={{
                width: { xs: 250, md: 420 },
                height: { xs: 250, md: 420 },
                bgcolor: "#ff8a00",
                borderRadius: "50%",
                position: "absolute",
                bottom: 0,
              }}
            />

            {/* Image */}
            <img
              src="/jenny.png"   // put image in public folder
              alt="Jenny"
              style={{
                width: "280px",
                zIndex: 2,
              }}
            />
          </Box>

        </Stack>
      </Container>
    </Box>
  );
}
