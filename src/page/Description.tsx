import DescriptionContainer from '../components/DescriptionContainer';
import Discord from './Discord';
import { Typography } from '@mui/material';

const Description = () => {
  return (
    <DescriptionContainer>
      <Typography align="center">
        Welcome to my space. My nickname is Delemangi. I mostly make web apps
        and Discord bots, and play some indie video games in my free time. I
        also run these Discord servers: <Discord />.
      </Typography>
    </DescriptionContainer>
  );
};

export default Description;
