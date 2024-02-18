import { Box, styled } from "@mui/material";

const Background = styled(Box)({
  width: "100%",
  height: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: -1,
  background: "radial-gradient(ellipse, #4bad7c 25%, #4bada5 50%, #4b8bad 80%) center",
  animation: "pulse 5s ease-in-out infinite alternate",
  "@keyframes pulse": {
    "0%": {
      backgroundSize: "100% 100%",
    },
    "100%": {
      backgroundSize: "150% 150%",
    },
  },
});

export default Background;
