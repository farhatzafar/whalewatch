import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container } from '@mui/material';

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
    <div
    style={{
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)'
    }}
>
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 4,
        }}
      >
        <Typography variant="h4" gutterBottom>
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
      </Box>
    </Container>
    </div>
  );
};

export default Contact;
