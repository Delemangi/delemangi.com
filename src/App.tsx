import { Box, ThemeProvider } from "@mui/material";
import Background from "./components/Background";
import Buttons from "./components/Buttons";
import ColumnContainer from "./components/ColumnContainer";
import Description from "./components/Description";
import HorizontalDivider from "./components/HorizontalDivider";
import Intro from "./components/Intro";
import "./style.css";
import { theme } from "./theme/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <ColumnContainer sx={{
          maxWidth: "50%",
          margin: "auto"
        }}>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          }}>
            <Intro />
            <Buttons />
            <HorizontalDivider />
          </Box>
          <Box>
            <Description />
          </Box>
        </ColumnContainer>
      </Background>
    </ThemeProvider>
  );
};

export default App;
