import { Link, Typography } from "@mui/material";
import Column from "./Column";

const Intro = () => {
  return (
    <Column sx={{ animation: "fadeIn 1.5s ease-in-out" }}>
      <Typography fontSize={48}>Delemangi</Typography>
      <Typography fontSize={16}>Software Engineer @ <Link href="https://codechem.com">CodeChem</Link></Typography>
    </Column>
  )
};

export default Intro;
