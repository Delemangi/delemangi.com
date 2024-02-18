import { Container, styled } from "@mui/material";

const DescriptionContainer = styled(Container)(({ theme }) => ({
  animation: "fadeIn 1s ease-in-out both",
  animationDelay: "1.75s",
  [theme.breakpoints.down("lg")]: {
    width: "70vw",
  },
  [theme.breakpoints.down("md")]: {
    width: "80vw",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90vw",
  },
  [theme.breakpoints.down("xs")]: {
    width: "95vw",
  },
}));

export default DescriptionContainer;
