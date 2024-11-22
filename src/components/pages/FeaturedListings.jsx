import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

import cozyLoft from '../../assets/images/cozyLoft.jpg';
import singleRoom from '../../assets/images/SingleRoom.jpg';
import spaciousApartment from '../../assets/images/SpaciousAPT.jpeg';
import kitchen from '../../assets/images/kitchen.jpg';

// Listings data
function FeaturedListings() {
    const listings = [
        {
            id: 1,
            title: 'Cozy Loft',
            type: 'Apartment',
            price: '$1300/month',
            image: cozyLoft,
            bedrooms: 2,
            bathrooms: 1,
            sqft: 750,
            address: '1234 Maple St, Irvine, CA'
        },
        {
            id: 2,
            title: 'Spacious Apartment',
            type: 'House',
            price: '$1600/month',
            image: spaciousApartment,
            bedrooms: 3,
            bathrooms: 2,
            sqft: 1200,
            address: '5678 Oak Ave, Irvine, CA'
        },
        {
            id: 3,
            title: 'Single Room',
            type: 'Room',
            price: '$800/month',
            image: singleRoom,
            bedrooms: 1,
            bathrooms: 1,
            sqft: 200,
            address: '9101 Pine Dr, Irvine, CA'
        },
        {
            id: 4,
            title: 'Studio Apartment',
            type: 'Room',
            price: '$2500/month',
            image: kitchen,
            bedrooms: 1,
            bathrooms: 1,
            sqft: 550,
            address: '1122 Birch Rd, Irvine, CA'
        },
    ];

    return (
        <Box
            sx={{
                backgroundColor: 'white',
                py: 10,
                px: 4,
            }}
        >
            <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{
                    color: '#2563EB',
                    py: "36px",
                    fontWeight: 800,
                    textAlign: "center",
                }}
            >
                Trending Listings in Irvine, CA
            </Typography>

            <Grid container spacing={4}>
                {listings.map((listing) => (
                    <Grid item xs={12} sm={6} md={3} key={listing.id}>
                        <Card
                            sx={{
                                width: '100%',
                                aspectRatio: '1 / 1.1',
                                cursor: "pointer",
                                borderRadius: 2,
                                display: 'flex',
                                paddingBottom: 5,
                                flexDirection: 'column',
                                transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                                '&:hover': {
                                    borderColor: 'rgba(255, 255, 255, 0.5)',
                                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.25)',
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={listing.image}
                                alt={listing.title}
                                sx={{
                                    width: '100%',
                                    height: '50%',
                                    objectFit: 'cover',
                                    borderTopLeftRadius: 8,
                                    borderTopRightRadius: 8,
                                }}
                            />
                            <CardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    height:'100%',
                                    textAlign: 'left',
                                    paddingLeft: 2,
                                    paddingRight: 2,
                                    paddingBottom: 10
                                }}
                            >
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                    {listing.title}
                                </Typography>
                                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                                    {listing.price}
                                </Typography>
                                <Typography variant="body5" sx={{ color: 'text.secondary' }}>
                                    {listing.bedrooms} Bedrooms | {listing.bathrooms} Bathrooms | {listing.sqft} sqft
                                </Typography>
                                <Typography variant="body4" sx={{ color: 'text.secondary' }}>
                                    {listing.address}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}



export default FeaturedListings;
