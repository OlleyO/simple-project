import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";

import Logo from "@components/common/logo";

const links = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/find-doctor",
    title: "Find a doctor",
  },
  {
    href: "/apps",
    title: "Apps",
  },
  {
    href: "/testimonials",
    title: "Testimonials",
  },
  {
    href: "/about-us",
    title: "About us",
  },
];

const Navbar: React.FC = () => {
  const { pathname } = useRouter();
  console.log(pathname);
  const isLinkActive = (href: string): boolean => href === pathname;

  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} />
      {links.map(({ href, title }) => (
        <Link
          className={cn(styles.link, {
            [styles.active]: isLinkActive(href),
          })}
          href={href}
          key={href}
        >
          {title}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
