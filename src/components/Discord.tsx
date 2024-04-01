import { Link, Typography } from '@mui/material';

const Discord = () => {
  return (
    <>
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
    </>
  );
};

export default Discord;
