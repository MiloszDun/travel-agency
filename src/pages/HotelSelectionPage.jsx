import React from 'react';
import { Typography, Container, Stack, Grid, Card, CardContent, CardMedia, CardActions } from '@mui/material';
import CustomButton from '../components/CustomButton';

const hotelData = [
  { location: "Nadia, Bengal", name: "Moon Inn", stars: 5, price: 200, tags: ["Pet Friendly"] },
  { location: "Rome, Italy", name: "Mountain Retreat", stars: 3, price: 200, tags: ["Free Cancellation"] },
  { location: "Rome, Italy", name: "Moon Inn", stars: 3, price: 300, tags: ["All Inclusive"] },
  { location: "Rome, Italy", name: "Star Hotel", stars: 4, price: 300, tags: ["All Inclusive"] },
  { location: "Rome, Italy", name: "Garden Resort", stars: 4, price: 300, tags: ["Pet Friendly"] },
  { location: "Isola, France", name: "Mountain Retreat", stars: 3, price: 150, tags: ["All Inclusive"] },
  { location: "Rome, Italy", name: "Garden Resort", stars: 5, price: 300, tags: ["All Inclusive"] },
  { location: "Nadia, Bengal", name: "Sky Lodge", stars: 5, price: 50, tags: ["Budget Option", "Free Cancellation"] },
  { location: "Valencia, Spain", name: "Galaxy Hotel", stars: 4, price: 50, tags: ["Budget Option", "Pet Friendly"] },
  { location: "Nadia, Bengal", name: "Ocean View", stars: 5, price: 300, tags: ["All Inclusive"] },
  { location: "Isola, France", name: "Galaxy Hotel", stars: 5, price: 50, tags: ["Budget Option", "Pet Friendly"] },
  { location: "Valencia, Spain", name: "Garden Resort", stars: 5, price: 50, tags: ["Budget Option", "Free Cancellation"] },
  { location: "Rome, Italy", name: "Sun Hotel", stars: 4, price: 300, tags: ["All Inclusive", "Pet Friendly"] },
  { location: "Valencia, Spain", name: "Galaxy Hotel", stars: 4, price: 300, tags: ["All Inclusive", "Free Cancellation"] },
  { location: "Isola, France", name: "Star Hotel", stars: 5, price: 100, tags: ["Budget Option", "Pet Friendly"] },
  { location: "Valencia, Spain", name: "Sky Lodge", stars: 4, price: 150, tags: ["Pet Friendly", "Free Cancellation"] },
  { location: "Rome, Italy", name: "Royal Palace", stars: 3, price: 50, tags: ["Budget Option", "All Inclusive"] },
  { location: "Nadia, Bengal", name: "Sun Hotel", stars: 5, price: 200, tags: ["Pet Friendly", "Free Cancellation"] },
  { location: "Isola, France", name: "Mountain Retreat", stars: 4, price: 150, tags: ["All Inclusive", "Pet Friendly"] },
  { location: "Isola, France", name: "Mountain Retreat", stars: 5, price: 200, tags: ["Pet Friendly", "Free Cancellation"] },
];


const HotelSelection = () => {
  return (
    <Container sx={{ marginTop: 2, marginBottom: 2 }}>
      <Typography variant="h3" component="h1" gutterBottom align='center'>
        Hotel Selection
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom align='center' sx={{ fontStyle: 'italic', marginBottom: 4 }}>
        Choose your stay in PLACENAME
      </Typography>
      <Stack direction="row" spacing={8} justifyContent='center' sx={{ marginBottom: 4 }}>
        <Typography variant="h6">All Inclusive</Typography>
        <Typography variant="h6">Free Cancellation</Typography>
        <Typography variant="h6">Pet Friendly</Typography>
        <Typography variant="h6">Budget Options</Typography>
      </Stack>
      <Grid container spacing={4}>
        {
          hotelData.map((hotel) => (
            <Grid item md={3} sm={4} xs={6}>
              <Card sx={{maxWidth: 260 }}>
                <CardMedia component="img" height="140" image="https://placehold.co/600x400" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {hotel.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {hotel.location}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {hotel.stars} Stars
                  </Typography>
                </CardContent>
                <CardActions disableSpacing sx={{ paddingRight: 2}}>
                  <CustomButton size="small">Select</CustomButton>
                  <Typography variant="body1" color="text.secondary" sx={{marginLeft: 'auto'}}>
                    ${hotel.price} / night
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
};

export default HotelSelection;