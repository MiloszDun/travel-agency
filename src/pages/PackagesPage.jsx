import React from 'react';
import { Typography, Grid, Container } from '@mui/material';
import Package from '../components/Package';
import baloonsImage from '../img/Baloons.jpg';
import colloseumImage from '../img/Colloseum.jpg';
import snowboardImage from '../img/Snowboard.jpg';
import tigerImage from '../img/Tiger.jpg';


const PackageData = [
  {
    id: 1,
    backgroundImage: snowboardImage,
    name: "Snowboard Paradise",
    description: "Take the challenge of icy Isola mountains and spend a week enjoying the beauty of Maritime Alps.",
    location: "Isola, France",
    duration: "7 days",
    price: "$799",
  },
  {
    id: 2,
    backgroundImage: baloonsImage,
    name: "Balloon Tour",
    description: "Discover the wonders of Spain from high above the ground while experiencing the joy of balloon flying.",
    location: "Valencia, Spain",
    duration: "5 days",
    price: "$999",
  },
  {
    id: 3,
    backgroundImage: tigerImage,
    name: "Saving Tigers",
    description: "Help save tigers by volunteering in Bengal Animal Centre and discover the wildlife of South Asia. 20% of tour costs go to local charity!",
    location: "Nadia, Bengal",
    duration: "14 days",
    price: "$1499",
  },
  {
    id: 4,
    backgroundImage: colloseumImage,
    name: "Eternal City",
    description: "Explore the hidden side of Rome and learn about art on this trip in the Eternal City.",
    location: "Rome, Italy",
    duration: "7 days",
    price: "$599",
  }
];


const PackagesPage = () => {
  return (
    <Container sx={{ marginTop: 2, marginBottom: 2 }}>
      <Typography variant="h3" component="h1" gutterBottom align='center'>
        Packages
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom align='center' sx={{ fontStyle: 'italic' }}>
        Select your dream holiday
      </Typography>
      <Grid container spacing={4} sx={{ marginTop: 1 }}>
        {PackageData.map((item) => (
          <Grid item xs={12} md={6} key={item.id}>
            <Package
              backgroundImage={item.backgroundImage}
              name={item.name}
              description={item.description}
              location={item.location}
              duration={item.duration}
              price={item.price}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PackagesPage;