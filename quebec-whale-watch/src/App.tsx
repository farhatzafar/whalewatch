// src/App.tsx
import React from 'react';
import Navbar from './components/navbar';
import Cards from './components/cards';
import { Container, CssBaseline, Box, Typography } from '@mui/material';
import whaleWatchImage from './assets/coverimage.jpg';

const App: React.FC = () => {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      
      {/* Full-width image with text overlay */}
      <Box
        sx={{
          position: 'relative',
          width: '100vw',  // Ensures the Box spans the full viewport width
          height: '400px', // Adjust height as necessary
          backgroundImage: `url(${whaleWatchImage})`,
          backgroundSize: 'cover', // Ensures image covers the Box while maintaining aspect ratio
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          top: 0,  // Ensures the image starts from the top of the page
          left: 0, // Align the image to the left edge of the screen
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
          }}
        >
          Quebec Whale Watch
        </Typography>
      </Box>

      <Container sx={{ marginTop: 4 }}>
        <Cards />
      </Container>
    </div>
  );
};

export default App;