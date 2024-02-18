
import { IconButton, Popover, Typography } from "@mui/material";
import { MouseEvent, useState } from "react";
import { SiDiscord, SiGithub, SiGmail, SiLinkedin, SiSteam } from "react-icons/si";
import RowContainer from "./RowContainer";

const Buttons = () => {
  const [anchorElement, setAnchorElement] = useState<HTMLElement>();

  const handleDiscordOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
    navigator.clipboard.writeText("delemangi");
  }

  return (
    <RowContainer sx={{ animation: 'fadeInMoveUp 1.5s both' }}>
      <IconButton href="mailto:milev.stefan@gmail.com">
        <SiGmail />
      </IconButton>

      <IconButton onClick={handleDiscordOnClick}>
        <SiDiscord />
      </IconButton>
      <Popover
        open={Boolean(anchorElement)}
        anchorEl={anchorElement}
        onClose={() => setAnchorElement(undefined)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Typography margin={0.5}>Copied!</Typography>
      </Popover>

      <IconButton href="https://github.com/Delemangi/" target="_blank">
        <SiGithub />
      </IconButton>

      <IconButton href="https://steamcommunity.com/id/delemangi/" target="_blank">
        <SiSteam />
      </IconButton>

      <IconButton href="https://www.linkedin.com/in/stefan-milev/" target="_blank">
        <SiLinkedin />
      </IconButton>
    </RowContainer>
  )
};

export default Buttons;
