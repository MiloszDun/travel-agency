import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Typography, Container, Stack, Grid, Card, CardContent, CardMedia, CardActions, Switch, FormControlLabel } from '@mui/material';
import CustomButton from '../components/CustomButton';
import { useAppContext } from '../data/AppContext';

const HotelSelection = () => {
  const { selectedPackage, HotelsData, setSelectedHotel } = useAppContext();

  const [isAllInclusive, setIsAllInclusive] = useState(false);
  const [isPetFriendly, setIsPetFriendly] = useState(false);
  const [isBudget, setIsBudget] = useState(false);

  // Determine if a hotel matches the active filters
  const matchesFilters = (hotel) => {
    const matchesAllInclusive = !isAllInclusive || hotel.tags.includes('All Inclusive');
    const matchesPetFriendly = !isPetFriendly || hotel.tags.includes('Pet Friendly');
    const matchesBudget = !isBudget || hotel.price < 100;
    return matchesAllInclusive && matchesPetFriendly && matchesBudget;
  };

  // First, filter hotels based on the selected package's location
  // Then, map over these hotels to determine additional filter matching
  const displayHotels = HotelsData
    .filter(hotel => hotel.location === selectedPackage.location)
    .map(hotel => ({ ...hotel, isVisible: matchesFilters(hotel) }));

  return (
    <Container sx={{ marginTop: 2, marginBottom: 2 }}>
      <Typography variant="h3" component="h1" gutterBottom align='center'>
        Hotel Selection
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom align='center' sx={{ fontStyle: 'italic', marginBottom: 4 }}>
        Choose your stay in {selectedPackage.location}
      </Typography>
      <Stack direction="row" spacing={2} justifyContent='center' sx={{ marginBottom: 4 }}>
        <FormControlLabel
          control={<Switch checked={isAllInclusive} onChange={() => setIsAllInclusive(!isAllInclusive)} />}
          label="All Inclusive"
        />
        <FormControlLabel
          control={<Switch checked={isPetFriendly} onChange={() => setIsPetFriendly(!isPetFriendly)} />}
          label="Pet Friendly"
        />
        <FormControlLabel
          control={<Switch checked={isBudget} onChange={() => setIsBudget(!isBudget)} />}
          label="Below $100 / night"
        />
      </Stack>
      <Grid container spacing={4}>
        {
          displayHotels.map((hotel) => (
            <Grid item md={3} sm={4} xs={6} key={hotel.name}>
              <Card sx={{
                maxWidth: 260,
                opacity: hotel.isVisible ? 1 : 0.5, // Reduce opacity if not matching filters
                pointerEvents: hotel.isVisible ? 'auto' : 'none', // Disable Card if not matching
              }}>
                <CardMedia component="img" height="140" image={hotel.backgroundImage} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {hotel.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{marginBottom: 1}}>
                    {hotel.location}
                  </Typography>
                  {hotel.tags.map((tag, index) => (
                    <Typography key={index} variant="body2" color="text.secondary">
                      {tag}
                    </Typography>
                  ))}
                </CardContent>
                <CardActions disableSpacing sx={{ paddingRight: 2}}>
                  <Link to="/summary" onClick={() => {setSelectedHotel(hotel)}}>
                    <CustomButton size="small">Select</CustomButton>
                  </Link>
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