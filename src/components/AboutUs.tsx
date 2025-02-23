import React, { useState, useEffect } from "react";
import { Container, Card, CardContent, Typography, Avatar, Box, createTheme, ThemeProvider , Stack} from "@mui/material";
import Abaigael_Savio from "./unifoodi_linkedin_pfps/Abaigael_Savio.jpg";
import Addison_Chen from "./unifoodi_linkedin_pfps/Addison_Chen.jpg";
import Alex_Yanez from "./unifoodi_linkedin_pfps/Alex_Yanez.jpg";
import Ali_Moradi from "./unifoodi_linkedin_pfps/Ali_Moradi.jpg";
import Anthony_Heard from "./unifoodi_linkedin_pfps/Anthony_Heard.jpg";
import Austin_Grey from "./unifoodi_linkedin_pfps/Austin_Grey.jpg";
import Daniel_Becker from "./unifoodi_linkedin_pfps/Daniel_Becker.jpg";
import Daniel_Guel from "./unifoodi_linkedin_pfps/Daniel_Guel.jpg";
import Miriya_Harth from "./unifoodi_linkedin_pfps/Miriya_Harth.jpg";
import Zara_White from "./unifoodi_linkedin_pfps/Zara_White.jpg";
import Archit_Bhatt from "./unifoodi_linkedin_pfps/Archit_Bhatt.jpg";
import AboutImage from "./Company_Logos/UNiFOODi Logo (No Background).png"; // New header image

// Load Google Fonts
const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
    h5: {
      fontFamily: "Playfair Display, serif", // Organic, nature-inspired font
      fontWeight: 700,
    },
    h6: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 600,
    },
    body1: {
      fontFamily: "Poppins, sans-serif",
    },
    body2: {
      fontFamily: "Poppins, sans-serif",
    },
  },
});

// Team Members List
const teamMembers = [
  { name: "Anthony Heard", role: "Lead Developer", image: Anthony_Heard },
  { name: "Daniel Becker", role: "Software Engineer", image: Daniel_Becker },
  { name: "Abaigael Savio", role: "Product Manager", image: Abaigael_Savio },
  { name: "Addison Chen", role: "UI/UX Designer", image: Addison_Chen },
  { name: "Alex Yanez", role: "Frontend Developer", image: Alex_Yanez },
  { name: "Ali Moradi", role: "Backend Developer", image: Ali_Moradi },
  { name: "Austin Grey", role: "Data Scientist", image: Austin_Grey },
  { name: "Daniel Guel", role: "Marketing Specialist", image: Daniel_Guel },
  { name: "Miriya Harth", role: "Project Coordinator", image: Miriya_Harth },
  { name: "Zara White", role: "Content Creator", image: Zara_White },
  { name: "Archit Bhatt", role: "Founder & CEO", image: Archit_Bhatt },
];

function AboutUs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="md"
        sx={{
          mt: 4,
          textAlign: "center",
          backgroundImage: `url('path_to_your_image.jpg')`,  // Add your image path here
          backgroundSize: 'cover',  // Ensures the image covers the entire container
          backgroundPosition: 'center',  // Centers the image within the container
          backgroundRepeat: 'no-repeat',  // Prevents the image from repeating
          minHeight: '300px',  // Sets a minimum height for the container, adjust as needed
        }}
      >
        
        {/* Header Image */}
        <Box
          component="img"
          src={AboutImage}
          alt="Unifoodi Banner"
          sx={{
            width: "40%",
            height: "15%",
  
            objectFit: "cover",

          }}
        />
  
        <Card 
        variant="outlined" 
        sx= {{ 
          p: 2, 
          mb: 4, 
          backgroundColor: "#BBE5ED" , 
          borderRadius: "16px", 
          transition: "all 0.3s ease-in-out", 
          "&:hover": { transform: "scale(1.05)" } 
          }}>

        <CardContent>
          <Typography variant="h5" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1">
            UNiFOODi is dedicated to addressing food waste and food insecurity at the University of California,
            Merced. Our mission is to promote sustainability in reducing food waste mitigation and student food
            insecurity, aligning with the university's sustainability objectives.
          </Typography>
        </CardContent>


        </Card>
  
        <Box 
          sx={{ 
            backgroundColor: "#3A405A", 
            borderRadius: "16px", 
            p: 2, 
            boxShadow: 2
          }}
        >
          <Card variant="outlined" sx={{ p: 2, mb: 4, borderRadius: "16px", bgcolor: "#BBE5ED" }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Company History & Leadership
              </Typography>
              <Typography variant="body1">
                Established in October 2023 by Daniel Guel, Anthony “AJ” Heard, and Javier Miranda, UNiFOODi has
                rapidly progressed towards its goal of launching a comprehensive food distribution platform.
              </Typography>
            </CardContent>
          </Card>

          <Card variant="outlined" sx={{ p: 2, mb: 4, borderRadius: "16px",  bgcolor: "#BBE5ED"}}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Company Goals
              </Typography>
              <Typography variant="body1">
                Our immediate goal is to successfully soft launch the platform in March 2025 on the UC Merced campus.
                By 2026, we aspire to be a leading model for university-based food sustainability initiatives.
              </Typography>
            </CardContent>
          </Card>

          {/* Team Section */}
          <Card variant="outlined" sx={{ p: 2, mb: 4, borderRadius: "16px"  , bgcolor: "#BBE5ED"}}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Meet Our Team
              </Typography>
              <Typography variant="body1">
                Our team consists of passionate and talented individuals dedicated to making a positive impact on the
                environment and food sustainability.
              </Typography>
            </CardContent>
          </Card>
        </Box>


        {/* Team Member Carousel */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", my: 5 }}>
          <Avatar
            src={teamMembers[currentIndex].image}
            alt={teamMembers[currentIndex].name}
            sx={{ width: 250, height: 250, mb: 2, boxShadow: 3 }}
          />
          <Typography variant="h6">
            {teamMembers[currentIndex].name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {teamMembers[currentIndex].role}
          </Typography>
        </Box>

      </Container>
    </ThemeProvider>
  );
}

export default AboutUs;
