import DiscordIcon from '../icons/DiscordIcon';
import GitHubIcon from '../icons/GitHubIcon';
import GMailIcon from '../icons/GMailIcon';
import LinkedInIcon from '../icons/LinkedInIcon';
import SteamIcon from '../icons/SteamIcon';
import MediaButton from './MediaButton';
import RowContainer from './RowContainer';
import { Box, Popover, Tooltip, Typography } from '@mui/material';
import { type MouseEvent, useCallback, useState } from 'react';

const SocialMedia = () => {
  const [anchorElement, setAnchorElement] = useState<HTMLElement>();

  const handleDiscordOnClick = useCallback(
    async (event: MouseEvent<HTMLButtonElement>) => {
      setAnchorElement(event.currentTarget);
      await navigator.clipboard.writeText('delemangi');
      setTimeout(() => setAnchorElement(undefined), 1_500);
    },
    [],
  );

  return (
    <RowContainer sx={{ animation: 'fadeInMoveUp 1.5s ease-in-out both' }}>
      <Tooltip title="GMail">
        <MediaButton href="mailto:milev.stefan@gmail.com">
          <GMailIcon />
        </MediaButton>
      </Tooltip>

      <Tooltip title="Discord">
        <MediaButton onClick={handleDiscordOnClick}>
          <DiscordIcon />
        </MediaButton>
      </Tooltip>
      <Popover
        anchorEl={anchorElement}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        onClose={() => setAnchorElement(undefined)}
        open={Boolean(anchorElement)}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
      >
        <Box>
          <Typography
            padding={0.5}
            sx={{
              backgroundColor: '#80ffd3',
            }}
          >
            Copied!
          </Typography>
        </Box>
      </Popover>

      <Tooltip title="GitHub">
        <MediaButton href="https://github.com/Delemangi/">
          <GitHubIcon />
        </MediaButton>
      </Tooltip>

      <Tooltip title="Steam">
        <MediaButton href="https://steamcommunity.com/id/delemangi/">
          <SteamIcon />
        </MediaButton>
      </Tooltip>

      <Tooltip title="LinkedIn">
        <MediaButton href="https://www.linkedin.com/in/stefan-milev/">
          <LinkedInIcon />
        </MediaButton>
      </Tooltip>
    </RowContainer>
  );
};

export default SocialMedia;
