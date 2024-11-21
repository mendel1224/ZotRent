import React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#000000',
    },
    primary: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h6: {
      fontWeight: 700,
      color: '#000000',
      fontSize: '1.5rem', 
    },
    button: {
      textTransform: 'none',
      color: '#000000',
      fontSize: '0.95rem', 
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
    </ThemeProvider>
  );
}

export default App;