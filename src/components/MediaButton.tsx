import { IconButton, type IconButtonProps } from '@mui/material';

type Props = IconButtonProps & {
  readonly href?: string;
};

const MediaButton = ({ children, href, ...props }: Props) =>
  href ? (
    <IconButton
      component="a"
      href={href}
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

export default MediaButton;
