import { Box, styled } from '@mui/material';

const HorizontalDivider = styled(Box)({
  animation: 'fadeIn 1s ease-in-out both',
  animationDelay: '1.75s',
  backgroundImage:
    'linear-gradient(to right, rgba(0, 0, 0, 0), #2f2f2f, rgba(0, 0, 0, 0))',
  height: '2px',
  margin: '20px 0',
  marginLeft: '-10%',
  width: '120%',
});

export default HorizontalDivider;
