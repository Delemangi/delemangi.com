import { Copyright } from "@mui/icons-material";
import { Link, Typography } from "@mui/material";
import RowContainer from "./RowContainer";

const Bottom = () => {
  return (
    <RowContainer sx={{
      gap: "0.5rem",
      animation: "fadeIn 1s ease-in-out both",
      animationDelay: "1.75s"
    }}>
      <Copyright sx={{
        margin: 0
      }} />
      <Typography variant="body2" color="textSecondary" align="center">
        Delemangi {new Date().getFullYear()}. <Link href="https://github.com/Delemangi/delemangi.com" target="_blank">Source code</Link>. License: MIT.
      </Typography>
    </RowContainer>
  );
};

export default Bottom;
