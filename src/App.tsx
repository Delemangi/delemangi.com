import Animations from './components/Animations';
import Background from './components/Background';
import Bottom from './components/Bottom';
import Buttons from './components/Buttons';
import ColumnBox from './components/ColumnBox';
import ColumnContainer from './components/ColumnContainer';
import Description from './components/Description';
import HorizontalDivider from './components/HorizontalDivider';
import Intro from './components/Intro';
import { theme } from './theme/theme';
import { Box, ThemeProvider } from '@mui/material';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Animations />
      <Background>
        <ColumnContainer
          sx={{
            margin: 'auto',
            maxWidth: '50%',
          }}
        >
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
