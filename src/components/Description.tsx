import DescriptionContainer from './DescriptionContainer';
import Discord from './Discord';
import { Typography } from '@mui/material';

const Description = () => {
  return (
    <DescriptionContainer>
      <Typography align="center">
        Welcome to my space. I go by the nickname Delemangi, and in general, I
        mostly make different types of web apps and Discord bots in my free
        time, as well as occasionally playing some video games, mostly indie. I
        also run these Discord servers: <Discord />.
      </Typography>
    </DescriptionContainer>
  );
};

export default Description;
