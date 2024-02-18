import { Box, styled } from "@mui/material";

const HorizontalDivider = styled(Box)({
  backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), #2f2f2f, rgba(0, 0, 0, 0))",
  height: "2px",
  width: "120%",
  margin: "20px 0",
  animation: "fadeIn 1s ease-in-out both",
  animationDelay: "1.75s",
  marginLeft: "-10%",
});

export default HorizontalDivider;
