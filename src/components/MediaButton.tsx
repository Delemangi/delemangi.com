import { IconButton, type IconButtonProps } from '@mui/material';
import { forwardRef } from 'react';

type Props = {
  readonly href?: string;
} & IconButtonProps;

const MediaButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, href, ...props }: Props, ref) => {
    return href ? (
      <IconButton
        component="a"
        href={href}
        ref={ref}
        sx={{
          '&:hover': {
            color: '#80ffd3',
            transition: 'color 0.5s',
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
            color: '#80ffd3',
            transition: 'color 0.5s',
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
