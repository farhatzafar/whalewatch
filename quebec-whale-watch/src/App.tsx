// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';  // Import ThemeProvider and createTheme
// Import your page components
import Home from './pages/Home';
import Tickets from './pages/Tickets';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0034ca', // Set your primary color here (example: blue)
    },
    secondary: {
      main: '#ff4081', // You can also set the secondary color if needed
    },
  },
});

const App: React.FC = () => {
  return (
    <Router>
       <ThemeProvider theme={theme}>
      <div>
        <CssBaseline />
        <Navbar />

        {/* Main content area */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;