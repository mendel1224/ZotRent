import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


function header()
{

return (
<AppBar 
        position="sticky" 
        sx={{ 
          backgroundColor: 'primary.main', 
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)', // Subtle shadow
          borderBottom: '1px solid #f0f0f0' // Subtle border
        }}
      >
        <Toolbar sx={{ 
          display: 'flex',
          minHeight: '68px', 
          px: { xs: 2, sm: 4 } // Responsive padding
        }}>
          {/* Left Section */}
          <Typography 
            variant="h6" 
            sx={{ 
              flexGrow: 1,
              '&:hover': {
                cursor: 'pointer',
                opacity: 0.8
              }
            }}
          >
            Zot Rent
          </Typography>
      
          {/* Right Section Buttons */}
          <Box sx={{ 
            display: 'flex', 
            gap: { xs: 1, sm: 2 }, // Responsive gap
            ml: 'auto' 
          }}>
            <Button 
              color="inherit"
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                }
              }}
            >
              Rent
            </Button>
            <Button 
              color="inherit"
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                }
              }}
            >
              Advertise
            </Button>
            <Button 
              color="inherit"
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                }
              }}
            >
              Sell
            </Button>
            <Button 
              color="inherit"
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                }
              }}
            >
              Manage Rentals
            </Button>
            <Button 
              color="inherit"
              sx={{
                border: '1px solid rgba(0, 0, 0, 0.23)',
                '&:hover': {
                  border: '1px solid rgba(0, 0, 0, 0.5)',
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                }
              }}
            >
              Sign in
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      );
}
export default header;