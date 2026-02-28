import React from 'react';
import { Box, Typography, Container, Grid, Link, Divider, TextField, InputAdornment, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Wrapper = styled(Box)(({ theme }) => ({
    backgroundColor: '#000',
    color: '#fff',
    width: '100%',
    padding: '60px 0 30px 0',
}));

const ConnectHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    flexWrap: 'wrap',
    gap: '20px',
}));

const ConnectTitle = styled(Typography)(({ theme }) => ({
    fontSize: '48px',
    fontWeight: '600',
    color: '#fff',
    fontFamily: "Montserrat",
    [theme.breakpoints.down('sm')]: {
        fontSize: '36px',
    },
}));

const ConnectIcon = styled(IconButton)(({ theme }) => ({
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.3)',
    padding: '12px',
    '&:hover': {
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
}));

const DividerAfterConnect = styled(Divider)(({ theme }) => ({
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: '50px',
}));

const LogoText = styled(Typography)(({ theme }) => ({
    fontSize: '32px',
    fontWeight: '600',
    color: '#fff',
    fontFamily: "Montserrat",
    marginBottom: '20px',
    letterSpacing: '1px',
}));

const Description = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    color: '#fff',
    opacity: 0.7,
    fontFamily: "Montserrat",
    lineHeight: 1.6,
    maxWidth: '400px',
    marginBottom: '30px',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    fontSize: '20px',
    fontWeight: '600',
    fontFamily: "Montserrat",
    color: '#fff',
    marginBottom: '25px',
}));

const NavLink = styled(Typography)(({ theme }) => ({
    color: '#fff',
    marginBottom: '15px',
    cursor: 'pointer',
    fontSize: '16px',
    fontFamily: "Montserrat",
    opacity: 0.7,
    '&:hover': {
        opacity: 1,
    },
}));

const ContactItem = styled(Typography)(({ theme }) => ({
    marginBottom: '15px',
    fontSize: '16px',
    fontFamily: "Montserrat",
    color: '#fff',
    opacity: 0.7,


}));

const NewsletterText = styled(Typography)(({ theme }) => ({
    fontSize: '18px',
    fontWeight: '500',
    color: '#fff',
    fontFamily: "Montserrat",
    marginBottom: '20px',
}));

const EmailField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        color: '#fff',
        '& fieldset': {
            border: 'none',
        },
    },
    '& .MuiInputBase-input': {
        padding: '10px 0',
        fontSize: '16px',
    },
}));

const SendButton = styled(IconButton)(({ theme }) => ({
    color: '#fff',
    padding: '10px',
    '&:hover': {
        backgroundColor: 'transparent',
        opacity: 0.8,
    },
}));

const FooterSection = styled(Box)(({ theme }) => ({
    marginTop: '50px',
    paddingTop: '30px',
}));

const CopyrightRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    marginBottom: '20px',
    '& .copyright': {
        fontSize: '14px',
        color: '#fff',
        opacity: 0.6,
    },
}));

const PolicyLinks = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '30px',
    '& a': {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '14px',
        opacity: 0.6,
        '&:hover': {
            opacity: 1,
            textDecoration: 'underline',
        },
    },
}));

const DividerBeforeFooter = styled(Divider)(({ theme }) => ({
    backgroundColor: 'rgba(255,255,255,0.2)',
    margin: '20px 0',
}));

const Contact = () => {
    return (
        <Wrapper id="contact">
            <Container maxWidth="lg">
                {/* Lets Connect there Header with Icon */}
                <ConnectHeader>
                    <ConnectTitle>
                        Lets Connect there
                    </ConnectTitle>
                    <ConnectIcon>
                        <ArrowForwardIcon />
                    </ConnectIcon>
                </ConnectHeader>

                {/* Divider after Lets Connect there */}
                <DividerAfterConnect />

                {/* Main Grid */}
                <Grid container spacing={6}>
                    {/* Left Column - Logo and Description */}
                    <Grid item size={{ xs: 12, md: 4 }}>
                        <LogoText>JCREA</LogoText>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed congue interdum ligula a dignissim. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Sed lobortis orci
                            elementum egestas lobortis.
                        </Description>
                    </Grid>

                    {/* Navigation Column */}
                    <Grid item size={{ xs: 12, sm: 6, md: 2 }}>
                        <SectionTitle>Navigation</SectionTitle>
                        <NavLink>Home</NavLink>
                        <NavLink>About Us</NavLink>
                        <NavLink>Service</NavLink>
                        <NavLink>Resume</NavLink>
                        <NavLink>Project</NavLink>
                    </Grid>

                    {/* Contact Column */}
                    <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
                        <SectionTitle>Contact</SectionTitle>
                        <ContactItem>+91 7738443636</ContactItem>
                        <ContactItem>Jaycrea36@gmail.com</ContactItem>
                        <Link to="" underline='none' sx={{ cursor: "pointer" }}>
                            <ContactItem>Portfolio-jcrea.com</ContactItem>
                        </Link>

                    </Grid>

                    {/* Newsletter Column */}
                    <Grid item size={{ xs: 12, md: 3 }}>
                        <NewsletterText>
                            Get the latest information
                        </NewsletterText>
                        <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.3)' }}>
                            <TextField
                                placeholder="Contact Me ...."
                                variant="standard"
                                fullWidth
                                sx={{
                                    '& .MuiInputBase-input': {
                                        color: '#fff',
                                        padding: '8px 0',
                                        '&::placeholder': {
                                            color: 'rgba(255,255,255,0.5)',
                                            opacity: 1,
                                        },
                                    },
                                    '& .MuiInput-underline:before': {
                                        borderBottom: '1px solid rgba(255,255,255,0.3)',
                                    },
                                    '& .MuiInput-underline:hover:before': {
                                        borderBottom: '1px solid rgba(255,255,255,0.5)',
                                    },
                                    '& .MuiInput-underline:after': {
                                        borderBottom: '1px solid #fff',
                                    },
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <SendButton edge="end">
                                                <SendIcon />
                                            </SendButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
                

                {/* Footer Section above border */}
                
                <FooterSection>
                    <CopyrightRow>
                        <Box className="copyright">
                            Copyright© 2026 Anshu. All Rights Reserved.
                        </Box>
                        <PolicyLinks>
                            <Link href="#" underline="none">
                                User Terms & Conditions
                            </Link>
                            <Link href="#" underline="none">
                                Privacy Policy
                            </Link>
                        </PolicyLinks>
                    </CopyrightRow>
                </FooterSection>

                {/* Border at the bottom */}

            </Container>
        </Wrapper>
    );
};

export default Contact;