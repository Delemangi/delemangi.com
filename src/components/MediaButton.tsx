import { IconButton, type IconButtonProps } from '@mui/material';
import { forwardRef } from 'react';

type Props = IconButtonProps & {
  readonly href?: string;
};

const MediaButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, href, ...props }: Props, ref) => {
    return href ? (
      <IconButton
        component="a"
        href={href}
        ref={ref}
        sx={{
          '&:hover': {
            color: '#3bdba3',
          },
          color: 'primary',
        }}
        target="_blank"
        {...props}
      >
        {children}
      </IconButton>
    ) : (
      <IconButton
        ref={ref}
        sx={{
          '&:hover': {
            color: '#3bdba3',
          },
          color: 'primary',
        }}
        {...props}
      >
        {children}
      </IconButton>
    );
  },
);

export default MediaButton;
