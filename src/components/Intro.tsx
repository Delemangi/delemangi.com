import { Typography } from "@mui/material";
import Column from "./Column";

const Intro = () => {
  return (
    <Column sx={{ animation: "fadeIn 1.5s ease-in-out" }}>
      <Typography fontSize={48}>Delemangi</Typography>
      <Typography fontSize={20}>Software Engineer</Typography>
    </Column>
  )
};

export default Intro;
