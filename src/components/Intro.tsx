import Age from './Age';
import Column from './Column';
import { Link, Typography } from '@mui/material';

const Intro = () => {
  return (
    <Column sx={{ animation: 'fadeIn 1.5s ease-in-out both' }}>
      <Typography fontSize={48}>Delemangi</Typography>
      <Typography fontSize={16}>Stefan Milev</Typography>
      <Age marginBottom={2} />
      <Typography fontSize={16}>
        Software Engineer @{' '}
        <Link
          href="https://codechem.com"
          target="_blank"
        >
          CodeChem
        </Link>
      </Typography>
      <Typography
        fontSize={16}
        marginBottom={2}
      >
        Computer Science Student @{' '}
        <Link
          href="https://finki.ukim.mk"
          target="_blank"
        >
          FCSE
        </Link>
      </Typography>

      <Typography fontSize={16}>Professional Code Monkey</Typography>
    </Column>
  );
};

export default Intro;
