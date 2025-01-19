import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    const errors = {
      name: formData.name ? '' : 'Name is required.',
      email: formData.email ? '' : 'Email is required.',
      message: formData.message ? '' : 'Message is required.',
    };
    
    setFormErrors(errors);
    
    // If no errors, process the form
    if (!errors.name && !errors.email && !errors.message) {
      console.log('Form Submitted:', formData);
      // Handle form submission logic (e.g., sending data to a server)
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Grid container spacing={4}>
        {/* Left Section: Contact Form */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom sx={{ marginTop: '20%'}}>
            Contact Us
          </Typography>

          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            {/* Name */}
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={!!formErrors.name}
              helperText={formErrors.name}
            />

            {/* Email */}
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={!!formErrors.email}
              helperText={formErrors.email}
            />

            {/* Message */}
            <TextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
              margin="normal"
              error={!!formErrors.message}
              helperText={formErrors.message}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              Send Message
            </Button>
          </form>
        </Grid>

        {/* Right Section: Contact Info */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            Contact Information
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Address:</strong> 163 Rue Bellevue, Tadoussac, QC G0T 3B8
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Phone:</strong> (418) 284-2319
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Email:</strong> quebecwhalewatch@gmail.com
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
