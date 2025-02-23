import {
  Box,
  Container,
  Typography,
  IconButton,
  styled,
  createTheme,
  ThemeProvider,
  Card,
  CardContent,
  CssBaseline
} from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Inter',
      'Roboto',
      '"Segoe UI"',
      'Arial',
      'sans-serif'
    ].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          display: 'block', // Override the flex display
          minHeight: '100vh',
          backgroundColor: '#BBE5ED',
          padding: 0,
        },
      },
    },
  },
});

const StyledContactIcon = styled(IconButton)(() => ({
    backgroundColor: '#32936F',
  color: 'white',
  padding: '12px',
  width: '48px',
  height: '48px',
  '&:hover': {
    backgroundColor: '#26A96C',
  },
}));

const ContactUs = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        sx={{ 
          minHeight: '100vh',
          py: { xs: 4, md: 8 },
          px: { xs: 2, md: 4 },
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#BBE5ED'
        }}
      >
        <Container maxWidth="lg" sx={{ my: 'auto' }}>
          <Card 
            elevation={3}
            sx={{ 
              borderRadius: 4,
              overflow: 'hidden',
              bgcolor: 'white',
              textAlign: 'left', // Override center alignment
              mx: 'auto'
            }}
          >
            <CardContent sx={{ 
              p: { xs: 4, md: 8 },
              pb: { xs: 6, md: 10 }
            }}>
              <Typography 
                component="h1"
                variant="h2" 
                sx={{ 
                  color: '#3A405A', 
                  mb: 6,
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  letterSpacing: '-0.02em',
                  textAlign: 'left',
                  lineHeight: 1.2
                }}
              >
                Contact Us
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <StyledContactIcon>
                    <Phone sx={{ fontSize: 24 }} />
                  </StyledContactIcon>
                  <Typography 
                    sx={{ 
                      color: '#3A405A', 
                      ml: 3,
                      fontWeight: 500, 
                      fontSize: '1.1rem',
                    }}
                  >
                    +1 (555) 123-4567
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <StyledContactIcon>
                    <Email sx={{ fontSize: 24 }} />
                  </StyledContactIcon>
                  <Typography 
                    sx={{ 
                      color: '#3A405A', 
                      ml: 3,
                      fontWeight: 500, 
                      fontSize: '1.1rem',
                    }}
                  >
                    support@example.com
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <StyledContactIcon>
                    <LocationOn sx={{ fontSize: 24 }} />
                  </StyledContactIcon>
                  <Typography 
                    sx={{ 
                      color: '#3A405A', 
                      ml: 3,
                      fontWeight: 500, 
                      fontSize: '1.1rem',
                    }}
                  >
                    123 Business St, Suite 100
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default ContactUs;