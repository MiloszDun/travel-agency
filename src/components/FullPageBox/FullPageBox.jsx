import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme, backgroundImage }) => ({
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  '&::before': { // Pseudo-element for dark overlay
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1, // Ensure the overlay is above the background image
  },
  '& > *': { // Direct children of the StyledBox should be positioned above the overlay
    position: 'relative',
    zIndex: 2,
  }
}));

const FullPageBox = ({ children, image, sx }) => {
  return (
    <StyledBox backgroundImage={image}>
      {children}
    </StyledBox>
  );
};

export default FullPageBox;
