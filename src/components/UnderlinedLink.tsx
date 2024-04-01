import { Link, type LinkProps, styled } from '@mui/material';

const UnderlinedLink = styled(Link)<LinkProps>(() => ({
  '&:hover': {
    color: '#80ffd3',
  },
  color: '#33f5b1',
  textDecoration: 'underline',
  textDecorationColor: '#33f5b1',
  textDecorationStyle: 'wavy',
}));

export default UnderlinedLink;
