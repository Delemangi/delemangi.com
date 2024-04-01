import MediaButton from './MediaButton';
import RowContainer from './RowContainer';
import { Popover, Tooltip, Typography } from '@mui/material';
import { type MouseEvent, useState } from 'react';
import { BiSolidEnvelope } from 'react-icons/bi';
import { SiDiscord, SiGithub, SiLinkedin, SiSteam } from 'react-icons/si';

const SocialMedia = () => {
  const [anchorElement, setAnchorElement] = useState<HTMLElement>();

  const handleDiscordOnClick = async (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
    await navigator.clipboard.writeText('delemangi');
    setTimeout(() => setAnchorElement(undefined), 1_500);
  };

  return (
    <RowContainer sx={{ animation: 'fadeInMoveUp 1.5s ease-in-out both' }}>
      <Tooltip title="Mail">
        <MediaButton href="mailto:milev.stefan@gmail.com">
          <BiSolidEnvelope />
        </MediaButton>
      </Tooltip>

      <Tooltip title="Discord">
        <MediaButton onClick={handleDiscordOnClick}>
          <SiDiscord />
        </MediaButton>
      </Tooltip>
      <Popover
        anchorEl={anchorElement}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        onClose={() => setAnchorElement(undefined)}
        open={Boolean(anchorElement)}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
      >
        <Typography margin={0.5}>Copied!</Typography>
      </Popover>

      <Tooltip title="GitHub">
        <MediaButton href="https://github.com/Delemangi/">
          <SiGithub />
        </MediaButton>
      </Tooltip>

      <Tooltip title="Steam">
        <MediaButton href="https://steamcommunity.com/id/delemangi/">
          <SiSteam />
        </MediaButton>
      </Tooltip>

      <Tooltip title="LinkedIn">
        <MediaButton href="https://www.linkedin.com/in/stefan-milev/">
          <SiLinkedin />
        </MediaButton>
      </Tooltip>
    </RowContainer>
  );
};

export default SocialMedia;
