import React from 'react';
import HeroSection from './components/AppComponents/hero';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/AppComponents/header';
import theme from './components/AppComponents/theme';
import MapSection from './components/AppComponents/mapSection';



function App() {
  return (
    
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
    <HeroSection />
    <MapSection />

    </ThemeProvider>
  );
}

export default App;