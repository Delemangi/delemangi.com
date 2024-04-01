import UnderlinedLink from './UnderlinedLink';
import { Typography } from '@mui/material';

const Discord = () => {
  return (
    <>
      <Typography fontSize={16}>Leading several Discord servers:</Typography>
      <Typography fontSize={16}>
        <UnderlinedLink
          href="https://discord.gg/finki-studenti-810997107376914444"
          target="_blank"
        >
          FCSE Students
        </UnderlinedLink>
      </Typography>
      <Typography fontSize={16}>
        <UnderlinedLink
          href="https://discord.gg/wZMqxC7AY6"
          target="_blank"
        >
          UKIM Students
        </UnderlinedLink>
      </Typography>
      <Typography
        fontSize={16}
        marginBottom={2}
      >
        <UnderlinedLink
          href="https://discord.gg/K2ND2ykP2j"
          target="_blank"
        >
          42.mk
        </UnderlinedLink>
      </Typography>
    </>
  );
};

export default Discord;
