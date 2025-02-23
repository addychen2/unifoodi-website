import { useState, useEffect } from "react";
import { 
  Container, 
  Card, 
  CardContent, 
  Typography, 
  Avatar, 
  Box, 
  createTheme, 
  ThemeProvider, 
  Modal, 
  Backdrop, 
  Fade, 
  Button 
} from "@mui/material";

// Importing team member images and header image
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
import AboutImage from "./Company_Logos/UNiFOODi Logo (No Background).png"; // Header image for the page

// Interface to define the structure of a team member
interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

// Creating a theme with custom fonts for the page
const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
    h5: {
      fontFamily: "Playfair Display, serif",
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

// List of team members with their information
const teamMembers: TeamMember[] = [
  { name: "Anthony Heard", role: "Lead Developer", image: Anthony_Heard, description: "Anthony is responsible for leading the development of the platform, ensuring robust and scalable solutions." },
  { name: "Daniel Becker", role: "Software Engineer", image: Daniel_Becker, description: "Daniel works on backend development and system architecture for UNiFOODi." },
  { name: "Abaigael Savio", role: "Product Manager", image: Abaigael_Savio, description: "Abaigael oversees the product vision, ensuring alignment with user needs and business goals." },
  { name: "Addison Chen", role: "UI/UX Designer", image: Addison_Chen, description: "Addison creates seamless and engaging user experiences through thoughtful design." },
  { name: "Alex Yanez", role: "Frontend Developer", image: Alex_Yanez, description: "Alex is focused on building intuitive and interactive interfaces." },
  { name: "Ali Moradi", role: "Backend Developer", image: Ali_Moradi, description: "Ali specializes in database management and API development." },
  { name: "Austin Grey", role: "Data Scientist", image: Austin_Grey, description: "Austin analyzes user behavior and optimizes data-driven decision-making." },
  { name: "Daniel Guel", role: "Marketing Specialist", image: Daniel_Guel, description: "Daniel leads digital marketing and outreach initiatives." },
  { name: "Miriya Harth", role: "Project Coordinator", image: Miriya_Harth, description: "Miriya ensures smooth collaboration between different teams." },
  { name: "Zara White", role: "Content Creator", image: Zara_White, description: "Zara creates engaging content to promote UNiFOODi’s mission." },
  { name: "Archit Bhatt", role: "Founder & CEO", image: Archit_Bhatt, description: "Archit is the visionary behind UNiFOODi, driving its growth and impact." },
];

// Main AboutUs Component
function AboutUs() {
  // State hooks to manage the team member index, modal visibility, and selected team member
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Effect hook to automatically change team member every 2 seconds when the modal is not open
  useEffect(() => {
    if (!open) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
      }, 2000);

      return () => clearInterval(interval); // Cleanup on unmount or when modal opens
    }
  }, [open]);

  // Open the modal with the selected team member
  const handleOpen = (member: TeamMember) => {
    setSelectedMember(member);
    setOpen(true);
  };

  // Close the modal
  const handleClose = () => {
    setOpen(false);
    setSelectedMember(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="md"
        sx={{
          mt: 4,
          textAlign: "center",
          backgroundImage: `url('path_to_your_image.jpg')`,  // Replace with actual image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '300px',

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
  
        {/* Card for Our Mission */}
        <Card variant="outlined" sx={{ p: 2, mb: 4, backgroundColor: "#BBE5ED", borderRadius: "16px", transition: "all 0.3s ease-in-out", "&:hover": { transform: "scale(1.05)" } }}>
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
  
        {/* Company History & Leadership, Company Goals, Meet Our Team */}
        <Box sx={{ backgroundColor: "#3A405A", borderRadius: "16px", p: 2,mb:4, boxShadow: 2 }}>
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

          <Card variant="outlined" sx={{ p: 2, mb: 4, borderRadius: "16px", bgcolor: "#BBE5ED" }}>
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

          <Card variant="outlined" sx={{ p: 2, mb: 4, borderRadius: "16px", bgcolor: "#BBE5ED" }}>
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

        {/* Display current team member */}
        <Card variant="outlined" sx={{ p: 6, mb: 4, backgroundColor: "#BBE5ED", borderRadius: "16px", transition: "all 0.3s ease-in-out", "&:hover": { transform: "scale(1.05)" } }}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", my: 5 }}>
            <Button onClick={() => handleOpen(teamMembers[currentIndex])} >
              <Avatar src={teamMembers[currentIndex].image} alt={teamMembers[currentIndex].name} sx={{ width: 250, height: 250, mb: 2, boxShadow: 3 }} />
            </Button>
            <Typography variant="h6">{teamMembers[currentIndex].name}</Typography>
            <Typography variant="body2" color="text.secondary">{teamMembers[currentIndex].role}</Typography>
          </Box>
        </Card>

        {/* Modal for Team Member Details */}
        <Modal open={open} onClose={handleClose} closeAfterTransition >
          <Fade in={open}>
            <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 400, bgcolor: "background.paper", boxShadow: 24, p: 4, borderRadius: 2, textAlign: "center" }}>
              {selectedMember && (
                <>
                  <Avatar src={selectedMember.image} alt={selectedMember.name} sx={{ width: 150, height: 150, mb: 2, boxShadow: 3, margin: "auto" }} />
                  <Typography variant="h6">{selectedMember.name}</Typography>
                  <Typography variant="body2" color="#32936F">{selectedMember.role}</Typography>
                  <Typography variant="body1" sx={{ mt: 2, color: "#32936F" }}>{selectedMember.description}</Typography>
                  <Button onClick={handleClose} variant="contained" sx={{ mt: 2 }}>Close</Button>
                </>
              )}
            </Box>
          </Fade>
        </Modal>

      </Container>
    </ThemeProvider>
  );
}

export default AboutUs;
