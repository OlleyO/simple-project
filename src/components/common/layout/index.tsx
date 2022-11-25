import styles from "./styles.module.scss";

import Navbar from "@components/common/navbar";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <Navbar />
    <main className={styles.layout}>{children}</main>
  </>
);

export default Layout;
