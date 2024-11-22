import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './components/AppComponents/theme';

// Import your components
import Header from './components/AppComponents/header';
import HeroSection from './components/AppComponents/hero';
import MapSection from './components/AppComponents/mapSection';
import FeaturedListings from './components/AppComponents/featuredListings';
import FullApartment from './components/AppComponents/fullApartment';
import ThankYouPage from './components/AppComponents/ThankYouListing';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Router>
        <Header />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <MapSection />
                <FeaturedListings />
              </>
            }
          />

          {/*Apartment Listing page */}
          <Route path="/list-property" element={<FullApartment />} />

          {/* Thank you page*/}
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
