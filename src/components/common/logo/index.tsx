import cn from "classnames";

import styles from "./styles.module.scss";

interface Props {
  className?: string;
}

const Logo: React.FC<Props> = ({ className }) => (
  <div className={cn(styles.logo, className)}>
    <div className={styles.icon}>T</div>
    <div className={styles["logo-text"]}>Trafalgar</div>
  </div>
);

export default Logo;
