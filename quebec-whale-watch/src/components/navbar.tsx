// src/components/Navbar.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar: React.FC = () => {
  return (
    <AppBar position="fixed" sx={{ width: '100%' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>
        {/* Wrap each Button with Link for routing */}
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/tickets" color="inherit">
          Tickets
        </Button>
        <Button component={Link} to="/gallery" color="inherit">
          Gallery
        </Button>
        <Button component={Link} to="/contact" color="inherit">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;