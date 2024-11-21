import React from 'react';
import { Box, Typography, TextField, Button, Container } from '@mui/material';

function HeroSection() {
  return (
    <Box 
    sx = {{
        backgroundColor: 'grey',
        color: 'white',
        py: 6, // veritcal padding
        textAlign: 'left',
    }} >

    <Container maxWidth = "md">
        <Typography variant='h3' component='h1' gutterBottom> 
            Welcome to ZotRent!
            </Typography>
        <Typography variant = 'h6'sx= {{color: 'white'}} > Find the perfect housing for your college life</Typography>
        
    <Box
          component="form"
          sx={{
            mt: 4, // margin top
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 2,
          }}
        >
    <TextField
        variant="outlined"
        placeholder="Search for listings..."
        sx={{
        width: '100%',
        maxWidth: 500,
        backgroundColor: 'white',
        borderRadius: 1,
  }}
/>  
  <Button variant = "contained"
    sx = {{
        backgroundColor: 'white',
        color:'black',
        '&:hover': // Change button style on hover
        {
            cursor: 'pointer', // Change cursor
            opacity: 0.9, // Slightly dim the button
        },

    }}
    >
    Search
  </Button>
        </Box>
        </Container>
    </Box>
  );
}

export default HeroSection;
