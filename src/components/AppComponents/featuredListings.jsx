import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

import cozyLoft from '../../assets/images/cozyLoft.jpg';
import singleRoom from '../../assets/images/SingleRoom.jpg';
import spaciousApartment from '../../assets/images/SpaciousAPT.jpeg';

// Listings data
const listings = [
  { id: 1, title: 'Cozy Loft', type: 'Apartment', price: '$1300/month', image: cozyLoft },
  { id: 2, title: 'Spacious Apartment', type: 'House', price: '$1600/month', image: spaciousApartment },
  { id: 3, title: 'Single Room', type: 'Room', price: '$800/month', image: singleRoom },
];

function FeaturedListings() {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        py: 6,
        px: 4,
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Trending Listings in Irvine, CA
      </Typography>

      <Grid container spacing={4}>
        {listings.map((listing) => (
          <Grid item xs={12} sm={6} md={4} key={listing.id}>
            <Card
              sx={{
                height: '100%',
                boxShadow: 3,
                borderRadius: 2,
              }}
            >
              <CardMedia
                component="img"
                image={listing.image}
                alt={listing.title}
                sx={{
                  height: 150,
                  objectFit: 'cover',
                }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {listing.title}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  {listing.price}
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
