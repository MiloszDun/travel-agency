import Button from '@mui/material/Button';
import { styled } from '@mui/material';

const StyledButton = styled(Button)({
  backgroundColor: '#7B1FA2',
  color: 'white',
  padding: '10px 20px',
  textTransform: 'none',
  fontFamily: 'Lato, sans-serif',
  fontWeight: 'bold',
  boxShadow: '0px 2px 2px -1px rgba(0,0,0,0.2), 0px 1px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
  '&:hover': {
    backgroundColor: '#6a1b9a',
  },
});

const CustomButton = ({ children, size, sx }) => {
  return (
    <StyledButton variant="contained" size={size} sx={sx}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;