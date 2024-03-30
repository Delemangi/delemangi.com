import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        color: '#3bdba3',
      },
    },
  },
  typography: {
    fontFamily: 'Kode Mono, monospace',
  },
});
