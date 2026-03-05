import React from 'react';
import { Box, Typography, LinearProgress, Button, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import cardImage from "../../Image/hire.png";



const Description = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    color: '#666',
    marginBottom: '30px',
    lineHeight: 1.6,
}));

const SkillItem = styled(Box)(({ theme }) => ({
    marginBottom: '20px',
}));

const SkillHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px',
    '& .skill-name': {
        fontSize: '16px',
        fontWeight: '500',
        color: '#000',
    },
    '& .skill-percentage': {
        fontSize: '16px',
        fontWeight: '500',
        color: '#000',
    },
}));

const StyledProgressBar = styled(LinearProgress)(({ theme }) => ({
    height: '6px',
    borderRadius: '3px',
    backgroundColor: '#E0E0E0',
    '& .MuiLinearProgress-bar': {
        backgroundColor: '#FD853A',
        borderRadius: '3px',
    },
}));

const HireButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#000',
    color: '#fff',
    padding: '12px 40px',
    fontSize: '18px',
    fontWeight: '500',
    borderRadius: '30px',
    marginTop: '30px',
    '&:hover': {
        backgroundColor: '#333',
    },
}));




const Hire = () => {
    const skills = [
        { name: 'HTML5', percentage: 90 },
        { name: 'CSS3', percentage: 80 },
        { name: 'BOOTSTRAP', percentage: 80 },
        { name: 'JAVASCRIPT', percentage: 80 },
        { name: 'REACT-JS', percentage: 75 },
        { name: 'MUI', percentage: 60 },
         { name: 'NEXT-JS', percentage: 50 },
          { name: 'GIT', percentage: 75 },
    ];

    return (
        <Box
            sx={{
                width: "100%",
                backgroundColor: '#F2F4F7',
                borderRadius: '50px',
                py: 4
            }}
            id="hire"
        >
            <Container maxWidth="lg">
                <Box>
                    <Typography
                        sx={{
                            color: "#000",
                            fontWeight: 700,

                            fontSize: { xs: "30px", md: "36px" },
                            fontFamily: "Montserrat"
                        }}
                    >
                        Why{" "}
                        <Box component="span" sx={{ color: "#ff7a00", }}>
                            Hire Me
                        </Box>
                    </Typography>

                    <Description sx={{ fontFamily: "Montserrat" }}>
                        I combine strong frontend fundamentals with modern UI practices to
                        deliver responsive and visually polished applications. I am highly
                        adaptable, quick to learn new technologies, and committed to writing
                        clean, maintainable code. My goal is to create seamless user experiences
                        that add real value to your business.
                    </Description>
                </Box>
                <Grid container spacing={6} alignItems="center">

                    {/* Left Side - Image */}
                    <Grid item size={{ xs: 12, md: 6 }} justifyContent={'flex-start'}>


                        <Box sx={{ width: "100%" }}>
                            <img src={cardImage} alt="Profile" style={{ width: "100%" }} />
                        </Box>





                    </Grid>

                    {/* Right Side - Skills and Hire Me */}
                    <Grid item size={{ xs: 12, md: 6 }}>


                        {/* Skills with Progress Bars */}
                        <Box sx={{ mb: 4 }}>
                            {skills.map((skill, index) => (
                                <SkillItem key={index}>
                                    <SkillHeader>
                                        <span className="skill-name" style={{ fontFamily: "Montserrat" }}>{skill.name}</span>
                                        <span className="skill-percentage" style={{ fontFamily: "Montserrat", backgroundColor: "#FD853A", color: "#fff", padding: "4px 8px", borderRadius: "4px" }}>{skill.percentage}%</span>
                                    </SkillHeader>
                                    <StyledProgressBar
                                        variant="determinate"
                                        value={skill.percentage}
                                        color='#FD853A'
                                    />
                                </SkillItem>
                            ))}
                        </Box>

                        {/* Hire Me Button */}
                        <HireButton variant="contained" disableElevation>
                            Hire me
                        </HireButton>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hire;