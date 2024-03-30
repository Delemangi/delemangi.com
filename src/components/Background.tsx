import { Box, styled } from '@mui/material';

const Background = styled(Box)({
  '@keyframes pulse': {
    '0%': {
      backgroundSize: '100% 100%',
    },
    '100%': {
      backgroundSize: '150% 150%',
    },
  },
  animation: 'pulse 5s ease-in-out infinite alternate',
  background:
    'radial-gradient(ellipse, #4bad7c 25%, #4bada5 50%, #4b8bad 80%) center',
  height: '100%',
  left: 0,
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: -1,
});

export default Background;
