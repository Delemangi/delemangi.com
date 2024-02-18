import { Box, ThemeProvider } from "@mui/material";
import Background from "./components/Background";
import Buttons from "./components/Buttons";
import ColumnContainer from "./components/ColumnContainer";
import Intro from "./components/Intro";
import "./style.css";
import { theme } from "./theme/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <ColumnContainer>
          <Box>
            <Intro />
            <Buttons />
          </Box>
        </ColumnContainer>
      </Background>
    </ThemeProvider>
  );
};

export default App;
