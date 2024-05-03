import Animations from '../components/Animations';
import Background from '../components/Background';
import ColumnBox from '../components/ColumnBox';
import ColumnContainer from '../components/ColumnContainer';
import HorizontalDivider from '../components/HorizontalDivider';
import LoadingSpinner from '../components/LoadingSpinner';
import { Box } from '@mui/material';
import { lazy, Suspense } from 'react';

const LazyIntroduction = lazy(async () => await import('./Introduction'));
const LazySocialMedia = lazy(async () => await import('./SocialMedia'));
const LazyDescription = lazy(async () => await import('./Description'));

const App = () => {
  return (
    <Background>
      <Animations />
      <Suspense fallback={<LoadingSpinner />}>
        <ColumnContainer
          sx={{
            height: '95%',
            margin: 'auto',
            maxWidth: '50%',
          }}
        >
          <ColumnBox>
            <LazyIntroduction />
            <LazySocialMedia />
            <HorizontalDivider
              sx={{
                margin: '20px 0',
                marginLeft: '-10%',
              }}
            />
          </ColumnBox>
          <Box>
            <LazyDescription />
          </Box>
        </ColumnContainer>
      </Suspense>
    </Background>
  );
};

export default App;
