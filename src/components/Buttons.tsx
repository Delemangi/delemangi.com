
import { Popover, Tooltip, Typography } from "@mui/material";
import { MouseEvent, useState } from "react";
import { BiSolidEnvelope } from "react-icons/bi";
import { SiDiscord, SiGithub, SiLinkedin, SiSteam } from "react-icons/si";
import MediaButton from "./MediaButton";
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
        open={Boolean(anchorElement)}
        anchorEl={anchorElement}
        onClose={() => setAnchorElement(undefined)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
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

export default Buttons;
