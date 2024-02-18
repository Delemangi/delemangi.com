import { Link, Typography } from "@mui/material";
import Column from "./Column";

const Intro = () => {
  return (
    <Column sx={{ animation: "fadeIn 1.5s ease-in-out both" }}>
      <Typography fontSize={48}>Delemangi</Typography>
      <Typography fontSize={16}>Software Engineer @ <Link href="https://codechem.com">CodeChem</Link></Typography>
      <Typography fontSize={16}>Computer Science Student @ <Link href="https://finki.ukim.mk">FCSE</Link></Typography>
    </Column>
  )
};

export default Intro;
