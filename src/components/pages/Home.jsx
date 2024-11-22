import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Header from "./Header.jsx";
import HeroSection from "./HeroSection.jsx";
import FeaturedListings from "./FeaturedListings.jsx";
import Info from "./Info.jsx";
import Needs from "./Needs.jsx";
import HowItWorks from "./HowItWorks.jsx";
import FaqSection from "./FaqSection.jsx";
import Footer from "./Footer.jsx";
function Home() {
    return (
        <div>
            <CssBaseline />
            <HeroSection/>
            <HowItWorks/>
            <Needs/>
            <Info/>
            <FeaturedListings/>
            <FaqSection/>
            <Footer/>

        </div>
    );
}

export default Home;