import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './pages/theme.js';
import Header from './components/AppComponents/Header.jsx';
import FullApartment from './components/AppComponents/FullApartment.jsx';
import ThankYouPage from './components/AppComponents/ThankYouListing.jsx';
import Home from "./pages/Home.jsx";
import ExplorePage from "./pages/ExplorePage.jsx";
import Listing from "./pages/Listing.jsx";
import RentRoom from "./pages/RentRoom.jsx";
import RentalPage from "./pages/RentalPage.jsx";
import ThankYouListing from "./components/AppComponents/ThankYouListing.jsx";


function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/list-property" element={<FullApartment />} />
            <Route path="/rent" element={<ExplorePage/>} />
          <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path={"/listing"} element={<Listing/>}/>
            <Route path={"/rent-room"} element={<RentRoom/>}/>
            <Route path={"/rental-page"} element={<RentalPage/>}/>
            <Route path={"/thank-you"} element={<ThankYouListing/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;