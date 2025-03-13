import { Box, CircularProgress } from '@mui/material';

const LoadingSpinner = () => (
  // center a spinner from MUI
  <Box
    sx={{
      alignItems: 'center',
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
    }}
  >
    <CircularProgress />
  </Box>
);
export default LoadingSpinner;
