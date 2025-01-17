import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import Navbar from './components/navbar';
import Cards from './components/cards';
import { Container, CssBaseline, Box, Typography } from '@mui/material';
import whaleWatchImage from './assets/coverimage.jpg';

// Import your page components
import Home from './pages/Home';
import Tickets from './pages/Tickets';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router> {/* Wrap the entire app in Router */}
      <div>
        <CssBaseline />
        <Navbar />

        {/* Full-width image with text overlay */}
        <Box
          sx={{
            position: 'relative',
            width: '100vw',  // Ensures the Box spans the full viewport width
            height: {
              xs: '300px',  // For mobile devices
              sm: '400px',  // For small tablets
              md: '500px',  // For large desktops
            },
            backgroundImage: `url(${whaleWatchImage})`,
            backgroundSize: 'cover', // Ensures image covers the Box while maintaining aspect ratio
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            top: 0,
            left: 0,
          }}
        >
          <Typography
            variant="h3"
            component="div"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              textShadow: '4px 4px 8px rgba(0, 0, 0, 0.6), 0px 0px 20px rgba(0, 0, 0, 0.4)',
              fontSize: {
                xs: '1.5rem',  // Smaller font size for mobile
                sm: '2.5rem',  // Medium font size for tablet
                md: '3rem',    // Larger font size for desktop
              },
            }}
          >
            Quebec Whale Watch
          </Typography>
        </Box>

        {/* Main content area */}
        <Container sx={{ marginTop: 4 }}>
          <Routes>
            {/* Define Routes for each page */}
            <Route path="/" element={<Home />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;