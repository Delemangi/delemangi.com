import { Box, styled } from "@mui/material";

const HorizontalDivider = styled(Box)({
  background: "linear-gradient(to right, rgba(0, 0, 0, 0), #2f2f2f, rgba(0, 0, 0, 0))",
  height: "1px",
  width: "120%",
  margin: "20px 0",
  animation: "fadeIn 1s",
  marginLeft: "-10%",
});

export default HorizontalDivider;
