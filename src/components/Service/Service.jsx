import React from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    IconButton,
    Container
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import BgImage from "../../Image/service-bg.jpg";

import cardImage from "../../Image/card-image.png";
const Service = () => {

    const services = [
        { title: "UI / UX Design", img: cardImage },
        { title: "Web Design", img: cardImage },
        { title: "Landing Page", img: cardImage }
    ];
    return (
        <Box
            sx={{
                position: "relative",
                zIndex: 2,
                mt: "-180px",

                // ✅ Background on parent directly
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${BgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",

                borderTopLeftRadius: "40px",
                borderTopRightRadius: "40px",
                borderBottomLeftRadius: "40px",
                borderBottomRightRadius: "40px",
                overflow: "hidden",

                py: 10
            }}
            id="service"
        >
            <Container maxWidth="lg">
                {/* Heading */}
                <Typography
                    sx={{
                        color: "#fff",
                        fontWeight: 700,
                        mb: 6,
                        fontSize: { xs: "30px", md: "36px" },
                        fontFamily: "Montserrat"
                    }}
                >
                    My{" "}
                    <Box component="span" sx={{ color: "#ff7a00", }}>
                        Project's
                    </Box>
                </Typography>

                {/* Cards */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: 4,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            sx={{
                                width: { xs: "100%", sm: "80%", md: 320 },
                                height: 380,
                                borderRadius: "30px",
                                background: "rgba(255, 255, 255, 0.11)",
                                backdropFilter: "blur(12px)",
                                color: "#fff",
                                position: "relative",
                                transition: "0.3s",
                                "&:hover": {
                                    transform: "translateY(-8px)"
                                }
                            }}
                        >
                            <CardContent>
                                <Typography
                                    sx={{
                                        fontWeight: 500,
                                        mb: 3,
                                        fontFamily: "Montserrat"
                                    }}
                                >
                                    {service.title}
                                </Typography>

                                {/* ✅ Image Instead of Box */}
                                <Box
                                    component="img"
                                    src={service.img}
                                    alt={service.title}
                                    sx={{
                                        width: "100%",
                                        height: "200px",
                                        objectFit: "cover",
                                        borderRadius: "20px"
                                    }}
                                />
                            </CardContent>

                            <IconButton
                                sx={{
                                    position: "absolute",
                                    bottom: 20,
                                    right: 20,
                                    backgroundColor: "#0d1b2a",
                                    color: "#fff",
                                    width: 50,
                                    height: 50,
                                    "&:hover": {
                                        backgroundColor: "#ff7a00"
                                    }
                                }}
                            >
                                <ArrowOutwardIcon />
                            </IconButton>
                        </Card>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Service;