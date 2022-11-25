import NextLink, { LinkProps } from "next/link";

import styles from "./styles.module.scss";

interface Props {
  variant: "link" | "button";
  icon: JSX.Element;
}

const Link: React.FC<
  LinkProps & React.HTMLProps<HTMLAnchorElement> & Props
> = ({
  as,
  children,
  href,
  replace,
  scroll,
  shallow,
  passHref,
  variant,
  icon,
  ...rest
}) => {
  return (
    <NextLink
      as={as}
      href={href}
      passHref={passHref}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
    >
      <a {...rest}>{children}</a>
    </NextLink>
  );
};

export default Link;
