import React from 'react';
import { Box } from '@mui/material';

function MapSection() {
  return (
    <Box
      sx={{
        height: '400px', // Set the height of the map section
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.57032161634!2d-117.84424962409321!3d33.64238137331411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcde0e2592bf91%3A0x79fbc5d0b6dab7ec!2sUniversity%20of%20California%2C%20Irvine!5e0!3m2!1sen!2sus!4v1732248510981!5m2!1sen!2sus"
        width="100%" // Responsive width
        height="100%" // Matches parent height
        style={{
          border: 0, // Removes border from the iframe
        }}
        allowFullScreen=""
       loading= "eager" // load the iframe immediately
        title= "Google Map"
        referrerPolicy="no-referrer-when-downgrade" 
      />
    </Box>
  );
}

export default MapSection;


