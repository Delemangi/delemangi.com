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
      <Typography fontSize={16}>Leading several Discord servers:</Typography>
      <Typography fontSize={16}>
        <Link
          href="https://discord.gg/finki-studenti-810997107376914444"
          target="_blank"
        >
          FCSE Students
        </Link>
      </Typography>
      <Typography fontSize={16}>
        <Link
          href="https://discord.gg/wZMqxC7AY6"
          target="_blank"
        >
          UKIM Students
        </Link>
      </Typography>
      <Typography
        fontSize={16}
        marginBottom={2}
      >
        <Link
          href="https://discord.gg/K2ND2ykP2j"
          target="_blank"
        >
          42.mk
        </Link>
      </Typography>
      <Typography fontSize={16}>Professional Code Monkey</Typography>
    </Column>
  );
};

export default Intro;
