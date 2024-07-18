import DescriptionContainer from '../components/DescriptionContainer';
import Discord from './Discord';
import { Typography } from '@mui/material';

const Description = () => {
  return (
    <DescriptionContainer>
      <Typography align="center">
        Welcome to my space. I usually spend my time playing various indie games
        and creating Discord bots. You may find me on several Discord servers:{' '}
        <Discord />.
      </Typography>
    </DescriptionContainer>
  );
};

export default Description;
