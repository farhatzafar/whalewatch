import React from 'react';
import { Box, Typography, Button, Container, Card, CardContent, Grid, CardMedia, Paper } from '@mui/material';
import { Link } from 'react-router-dom';  // Import Link for client-side routing
import whaleWatchImage from '../assets/coverimage.jpg'; // Import your image

// Images for each whale
import humpbackImage from '../assets/humpback.jpg';
import belugaImage from '../assets/beluga.jpg';
import finImage from '../assets/finwhale.jpg';
import blueImage from '../assets/bluewhale.jpg';
import minkeImage from '../assets/minke.jpg';
import killerWhaleImage from '../assets/killerwhale.jpg';

const whaleData = [
  {
    name: "Humpback Whale",
    image: humpbackImage,
    description:
      "Humpback whales are known for their majestic songs and acrobatic breaches. These giants can grow up to 50 feet and weigh around 40 tons. They're often seen in groups, performing impressive leaps and flips.",
  },
  {
    name: "Beluga Whale",
    image: belugaImage,
    description:
      "Beluga whales are known as the 'canaries of the sea' for their distinctive vocalizations. These smaller, white whales are highly social and are often found in Arctic and sub-Arctic waters.",
  },
  {
    name: "Fin Whale",
    image: finImage,
    description:
      "The fin whale is one of the fastest whale species, reaching speeds of up to 23 miles per hour. With their sleek, streamlined bodies, they are often referred to as the 'greyhounds of the sea.'",
  },
  {
    name: "Blue Whale",
    image: blueImage,
    description:
      "Blue whales are the largest animals ever known to have lived on Earth. These incredible giants can reach lengths of up to 100 feet and weigh as much as 200 tons, making them true wonders of the ocean.",
  },
  {
    name: "Minke Whale",
    image: minkeImage,
    description:
      "Minke whales are the smallest of the baleen whales, measuring around 25 feet in length. They're highly agile and are often seen in coastal waters, feeding on fish and krill.",
  },
  {
    name: "Killer Whale",
    image: killerWhaleImage,
    description:
      "Killer whales, or orcas, are apex predators known for their intelligence and hunting tactics. These powerful creatures can grow up to 32 feet long and are highly social, often living in tight-knit family groups.",
  },
];

const Home: React.FC = () => {
  return (
    <div>
      {/* Full-width image with text overlay (only on Home page) */}
      <Box
        sx={{
          position: 'relative',
          width: '100vw',
          height: { xs: '250px', sm: '350px' }, // Slightly larger height for more impact
          marginTop: '55px', // Adjusted to compensate for AppBar height
          overflow: 'hidden', // Ensures image stays within container
        }}
      >
        {/* Cover image */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${whaleWatchImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            animation: 'zoomIn 15s infinite alternate', // Animation to zoom in the image
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
              fontFamily: 'cursive, sans-serif',
              fontWeight: 'bold',
              fontSize: { xs: 'h4', sm: 'h3' },
              textAlign: 'center',
              letterSpacing: '2px', // Adding some space between letters for a playful touch
            }}
            aria-label="Quebec Whale Watch"
          >
            Quebec Whale Watch
          </Typography>
        </Box>
      </Box>

      {/* Main content */}
      <Container sx={{ padding: { xs: 2, sm: 4 }, textAlign: 'center', marginTop: 4 }}>
        {/* New blurb about Tadoussac */}
        <Box sx={{ marginBottom: 4 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              marginBottom: 2,
              fontFamily: 'cursive, sans-serif',
              letterSpacing: '1px',
              color: '#0034ca',
            }}
          >
            Discover the Magic of Whale Watching in Tadoussac, Quebec!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: 'body2', sm: 'body1' },
              fontFamily: 'Lato, sans-serif',
              color: '#00557f',
              fontStyle: 'italic',
              lineHeight: 1.7,
            }}
          >
            Tadoussac, nestled at the meeting point of the Saguenay and St. Lawrence rivers, is one of the best places in the world to witness the majesty of whales. Embark on an unforgettable cruise and get up close to these magnificent creatures in their natural habitat. From the mighty blue whales to playful belugas, every moment on the water offers an extraordinary experience. Whether you're a seasoned wildlife enthusiast or a first-time explorer, our whale watching tours in Tadoussac promise an adventure you'll cherish forever.
          </Typography>
        </Box>

        {/* Whale Cards Grid */}
        <Grid container spacing={4}>
          {whaleData.map((whale, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={6} sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '10px' }}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 'none' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={whale.image}
                    alt={whale.name}
                    sx={{
                      objectFit: 'cover',
                      borderTopLeftRadius: '10px',
                      borderTopRightRadius: '10px',
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#0034ca' }}>
                      {whale.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#333' }}>
                      {whale.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Call-to-action button */}
        <Box sx={{ marginTop: 4 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}  // Use Link here for client-side routing
            to="/tickets"  // Use the 'to' prop instead of 'href'
            sx={{
              padding: '12px 24px',
              fontSize: '1.2rem',
              backgroundColor: '#ff4081', // Fun color
              '&:hover': {
                backgroundColor: '#f50057', // Vibrant hover effect
                transform: 'scale(1.05)', // Slight scaling effect on hover
                color: '#e1f4f9'
              },
              transition: 'transform 0.2s ease-in-out', // Smooth scaling transition
            }}
          >
            Book Your Whale Watching Tour Today!
          </Button>
        </Box>
      </Container>

      {/* Keyframe animations */}
      <style>
        {`
          @keyframes zoomIn {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
