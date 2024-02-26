import { Typography, Container, Box, Stack } from '@mui/material';
import CustomButton from '../components/CustomButton';
import { useAppContext } from '../data/AppContext';

const SummaryPage = () => {
  const { selectedPackage, selectedHotel } = useAppContext();

  return (
    <Container sx={{ marginTop: 2, marginBottom: 2 }}>
      <Typography variant="h3" component="h1" gutterBottom align='center'>
        Summary
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom align='center' sx={{ fontStyle: 'italic', marginBottom: 4 }}>
        Confirm your upcoming adventure
      </Typography>
      <Box sx={{ position: 'relative', color: 'white', padding: '0px', borderRadius: '8px', overflow: 'hidden', backgroundImage: `url(${selectedPackage.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '600px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Box sx={{ minWidth: {xs: '100%', sm: '100%', md: '400px'}, padding: '40px 20px 40px', backgroundColor: 'rgba(0,0,0,0.5)', minHeight: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 1, textAlign: 'center' }}>{selectedPackage.name}</Typography>
            <Typography variant="h5" sx={{ marginBottom: 4, textAlign: 'center' }}>in {selectedPackage.location}</Typography>
            <Stack direction='row' spacing={2} justifyContent='space-around' sx={{marginBottom: 4}}>
              <Typography variant="h6">{selectedHotel.name}</Typography>
              <Typography variant="h6">{selectedPackage.duration} days holiday</Typography>
            </Stack>
            <Stack justifyContent="center" alignItems='center' sx={{ marginBottom: '16px' }}>
              <Typography variant="body1">Package cost: ${selectedPackage.price}</Typography>
              <Typography variant="body1">Hotel cost: ${selectedHotel.price * selectedPackage.duration}</Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Total cost: ${selectedHotel.price * selectedPackage.duration + selectedPackage.price}</Typography>
              <CustomButton sx={{marginTop: 6}}>Pay Now</CustomButton>
            </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default SummaryPage;