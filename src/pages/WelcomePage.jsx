import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import FullPageBox from '../components/FullPageBox/FullPageBox';
import CustomButton from '../components/CustomButton'
import { Link } from 'react-router-dom';
import desertWalkImage from '../img/Desert-Walk.jpg'

const WelcomePage = () => {
  return (
    <FullPageBox image={desertWalkImage}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
          Begin the adventure of your life
        </Typography>
        <Box textAlign="center" marginTop={4}>
          <Link to="/packages">
            <CustomButton sx={{ fontSize: '1.1rem', padding: '12px 20px' }}>
              Click to find your dream holiday
            </CustomButton>
          </Link>
        </Box>
      </Container>
    </FullPageBox>
  );
};

export default WelcomePage;
