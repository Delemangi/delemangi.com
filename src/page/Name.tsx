import { Link, Typography } from '@mui/material';

const Name = () => (
  <Typography fontSize={48}>
    <Link
      href="https://github.com/Delemangi/delemangi.com"
      sx={{
        color: 'inherit',
        textDecoration: 'underline',
      }}
      target="_blank"
    >
      Delemangi
    </Link>
  </Typography>
);

export default Name;
