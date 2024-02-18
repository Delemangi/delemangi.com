import { Box, ThemeProvider } from "@mui/material";
import Background from "./components/Background";
import Bottom from "./components/Bottom";
import Buttons from "./components/Buttons";
import ColumnBox from "./components/ColumnBox";
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
          <ColumnBox>
            <Intro />
            <Buttons />
            <HorizontalDivider />
          </ColumnBox>
          <Box>
            <Description />
          </Box>
        </ColumnContainer>
        <Box>
          <Bottom />
        </Box>
      </Background>
    </ThemeProvider>
  );
};

export default App;
