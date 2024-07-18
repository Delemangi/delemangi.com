import DescriptionContainer from '../components/DescriptionContainer';
import Discord from './Discord';
import { Typography } from '@mui/material';

const Description = () => {
  return (
    <DescriptionContainer>
      <Typography align="center">
        Welcome to my space. I spent my time playing various indie games and
        creating Discord bots. I also run these Discord servers: <Discord />.
      </Typography>
    </DescriptionContainer>
  );
};

export default Description;
