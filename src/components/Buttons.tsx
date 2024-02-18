
import { IconButton, Popover, Tooltip, Typography } from "@mui/material";
import { MouseEvent, useState } from "react";
import { BiSolidEnvelope } from "react-icons/bi";
import { SiDiscord, SiGithub, SiLinkedin, SiSteam } from "react-icons/si";
import RowContainer from "./RowContainer";

const Buttons = () => {
  const [anchorElement, setAnchorElement] = useState<HTMLElement>();

  const handleDiscordOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
    navigator.clipboard.writeText("delemangi");
  }

  return (
    <RowContainer sx={{ animation: "fadeInMoveUp 1.5s ease-in-out both" }}>
      <Tooltip title="Mail">
        <IconButton href="mailto:milev.stefan@gmail.com">
          <BiSolidEnvelope />
        </IconButton>
      </Tooltip>

      <Tooltip title="Discord">
        <IconButton onClick={handleDiscordOnClick}>
          <SiDiscord />
        </IconButton>
        </Tooltip>
      <Popover
        open={Boolean(anchorElement)}
        anchorEl={anchorElement}
        onClose={() => setAnchorElement(undefined)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Typography margin={0.5}>Copied!</Typography>
      </Popover>

      <Tooltip title="GitHub">
        <IconButton href="https://github.com/Delemangi/" target="_blank">
          <SiGithub />
        </IconButton>
      </Tooltip>

      <Tooltip title="Steam">
        <IconButton href="https://steamcommunity.com/id/delemangi/" target="_blank">
          <SiSteam />
        </IconButton>
      </Tooltip>

      <Tooltip title="LinkedIn">
        <IconButton href="https://www.linkedin.com/in/stefan-milev/" target="_blank">
          <SiLinkedin />
        </IconButton>
      </Tooltip>
    </RowContainer>
  )
};

export default Buttons;
