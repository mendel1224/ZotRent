import React from 'react';
import HeroSection from './components/pages/HeroSection.jsx';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/pages/Header.jsx';
import theme from './components/pages/theme';
import MapSection from './components/pages/MapSection.jsx';
import FeaturedListings from './components/pages/FeaturedListings.jsx';
import Home from "./components/pages/Home.jsx";



function App() {
  return (
    
    <ThemeProvider theme={theme}>
    <CssBaseline />

    <Header />
    <Home/>

    </ThemeProvider>
  );
}

export default App;