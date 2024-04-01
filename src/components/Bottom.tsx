import RowContainer from './RowContainer';
import { Copyright } from '@mui/icons-material';
import { Link, Typography } from '@mui/material';

const Bottom = () => {
  return (
    <RowContainer
      sx={{
        animation: 'fadeIn 1s ease-in-out both',
        animationDelay: '1.75s',
        gap: '0.5rem',
      }}
    >
      <Copyright
        sx={{
          margin: 0,
        }}
      />
      <Typography
        align="center"
        color="textSecondary"
        variant="body2"
      >
        Delemangi {new Date().getFullYear()}.{' '}
        <Link
          href="https://github.com/Delemangi/delemangi.com"
          target="_blank"
        >
          Source code
        </Link>{' '}
        (MIT).
      </Typography>
    </RowContainer>
  );
};

export default Bottom;
