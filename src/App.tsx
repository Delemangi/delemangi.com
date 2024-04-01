import Animations from './components/Animations';
import Background from './components/Background';
import ColumnBox from './components/ColumnBox';
import ColumnContainer from './components/ColumnContainer';
import Description from './components/Description';
import Footer from './components/Footer';
import HorizontalDivider from './components/HorizontalDivider';
import Introduction from './components/Introduction';
import SocialMedia from './components/SocialMedia';
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
            <Introduction />
            <SocialMedia />
            <HorizontalDivider />
          </ColumnBox>
          <Box>
            <Description />
          </Box>
        </ColumnContainer>
        <Box>
          <Footer />
        </Box>
      </Background>
    </ThemeProvider>
  );
};

export default App;
