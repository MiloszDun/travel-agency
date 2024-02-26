import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import CustomButton from '../CustomButton';
import { Link } from 'react-router-dom';

const Package = ({ item, setSelectedPackage}) => {
  const handleClick = () => {
    console.log('Package selected')
    setSelectedPackage(item);
  }

  return (
    <Box sx={{ position: 'relative', color: 'white', padding: '0px', borderRadius: '8px', overflow: 'hidden', backgroundImage: `url(${item.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      <Box sx={{ padding: '20px 20px 4px', backgroundColor: 'rgba(0,0,0,0.5)', }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
          {item.name}
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: '16px' }}>
          {item.description}
        </Typography>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ marginBottom: '16px' }}>
          <Typography variant="body1">{item.location}</Typography>
          <Typography variant="body1">{item.duration} days</Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>${item.price}</Typography>
          <Link to="/hotels" onClick={handleClick}>
            <CustomButton>Choose This Package</CustomButton>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default Package;
