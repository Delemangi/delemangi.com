import Column from '../components/Column';
import UnderlinedLink from '../components/UnderlinedLink';
import Age from './Age';
import Name from './Name';
import { Typography } from '@mui/material';

const Introduction = () => {
  return (
    <Column sx={{ animation: 'fadeIn 1.5s ease-in-out both' }}>
      <Name />
      <Typography fontSize={16}>Stefan Milev</Typography>
      <Age marginBottom={2} />
      <Typography fontSize={16}>
        Software Engineer @{' '}
        <UnderlinedLink
          href="https://codechem.com"
          target="_blank"
        >
          CodeChem
        </UnderlinedLink>
      </Typography>
      <Typography
        fontSize={16}
        marginBottom={2}
      >
        Computer Science Student @{' '}
        <UnderlinedLink
          href="https://finki.ukim.mk"
          target="_blank"
        >
          FCSE
        </UnderlinedLink>
      </Typography>

      <Typography fontSize={16}>Professional Code Monkey</Typography>
    </Column>
  );
};

export default Introduction;
