import { IconButton, IconButtonProps } from "@mui/material";
import { forwardRef } from "react";

type Props = IconButtonProps & {
  href?: string;
};

const MediaButton = forwardRef(({ children, href, ...props }: Props, ref) => {
  return (
    // @ts-expect-error the href prop is causing TS problems
    <IconButton ref={ref} href={href} target="_blank" sx={{
      color: "primary",
      "&:hover": {
        color: "#7289da"
      }
    }} {...props}>
      {children}
    </IconButton>
  );
});

export default MediaButton;
