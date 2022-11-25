import NextLink, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";
import cn from "classnames";

import styles from "./styles.module.scss";

interface Props {
  className?: string;
  variant: "link" | "button" | "button-outlined";
  icon?: JSX.Element;
}

const Link: React.FC<PropsWithChildren<LinkProps & Props>> = ({
  children,
  variant,
  icon,
  className,
  ...props
}) => {
  return (
    <NextLink
      className={cn(styles["link-default"], styles[variant], className)}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export default Link;
