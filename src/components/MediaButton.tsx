import { IconButton, IconButtonProps } from "@mui/material";

type Props = IconButtonProps & {
  href?: string;
};

const MediaButton = ({ children, href, ...props }: Props) => {
  return (
    // @ts-expect-error the href prop is causing TS problems
    <IconButton href={href} target="_blank" sx={{
      color: "primary",
      "&:hover": {
        color: "#7289da"
      }
    }} {...props}>
      {children}
    </IconButton>
  );
};

export default MediaButton;
