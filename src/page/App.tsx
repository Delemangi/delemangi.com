import { lazy, Suspense } from 'react';

import Animations from '../components/Animations';
import Background from '../components/Background';
import ColumnBox from '../components/ColumnBox';
import ColumnContainer from '../components/ColumnContainer';
import LoadingSpinner from '../components/LoadingSpinner';

const LazyIntroduction = lazy(async () => await import('./Introduction'));
const LazySocialMedia = lazy(async () => await import('./SocialMedia'));

const App = () => (
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
        </ColumnBox>
      </ColumnContainer>
    </Suspense>
  </Background>
);

export default App;
