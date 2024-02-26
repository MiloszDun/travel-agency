import React, { useContext } from 'react';
import { Typography, Grid, Container } from '@mui/material';
import Package from '../components/Package';
import { useAppContext } from '../data/AppContext';

const PackagesPage = () => {
  const { PackagesData, setSelectedPackage } = useAppContext();

  return (
    <Container sx={{ marginTop: 2, marginBottom: 2 }}>
      <Typography variant="h3" component="h1" gutterBottom align='center'>
        Packages
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom align='center' sx={{ fontStyle: 'italic' }}>
        Select your dream holiday
      </Typography>
      <Grid container spacing={4} sx={{ marginTop: 1 }}>
        {PackagesData.map((item) => (
          <Grid item xs={12} md={6} key={item.id}>
            <Package item={item} setSelectedPackage={setSelectedPackage} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PackagesPage;