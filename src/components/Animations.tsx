import { Global } from '@emotion/react';
import { css } from '@mui/material';

const keyFrames = css`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes fadeInMoveUp {
    0% {
      opacity: 0;
      transform: translateY(1.5rem);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Animations = () => {
  return <Global styles={keyFrames} />;
};

export default Animations;
