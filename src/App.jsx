import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './components/pages/theme.js';

import Header from './components/AppComponents/Header.jsx';
import FullApartment from './components/AppComponents/FullApartment.jsx';
import ThankYouPage from './components/AppComponents/ThankYouListing.jsx';
import Home from "./components/pages/Home.jsx";


function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                  <Home/>
              </>
            }
          />

          <Route path="/list-property" element={<FullApartment />} />

          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;