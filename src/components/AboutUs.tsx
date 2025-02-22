import React, { useState, useEffect } from "react";
import { Container, Card, CardContent, Typography, Avatar, Box } from "@mui/material";
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

  // Automatically cycle through team members
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 4, textAlign: "center" }}>
      <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          About Unifood
        </Typography>

        {/* Mission Section */}
        <CardContent>
          <Typography variant="h5" color="primary" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            At Unifood, our mission is to reduce food waste by creating an innovative system that
            allows excess food to be shared and utilized efficiently. We strive to build a sustainable
            future where no food goes to waste.
          </Typography>
        </CardContent>

        {/* Team Section */}
        <CardContent>
          <Typography variant="h5" color="primary" gutterBottom>
            Meet Our Team
          </Typography>
          <Typography variant="body1">
            Our team consists of passionate and talented individuals dedicated to making a positive
            impact on the environment and food sustainability.
          </Typography>
        </CardContent>

        {/* Team Member Carousel */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", my: 3 }}>
          <Avatar
            src={teamMembers[currentIndex].image}
            alt={teamMembers[currentIndex].name}
            sx={{ width: 120, height: 120, mb: 2, boxShadow: 3 }}
          />
          <Typography variant="h6" fontWeight="bold">
            {teamMembers[currentIndex].name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {teamMembers[currentIndex].role}
          </Typography>
        </Box>
      </Card>
    </Container>
  );
}

export default AboutUs;
