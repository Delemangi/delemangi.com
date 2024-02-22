import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Kode Mono, monospace"
  },
  components:{
    MuiLink: {
      defaultProps: {
        color: "#3bdba3"
      }
    }
  }
});
