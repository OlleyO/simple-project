import cn from "classnames";
import Image from "next/image";

import styles from "./styles.module.scss";

interface Props {
  className?: string;
  description: string;
  imageSource: string;
  serviceName: string;
}

const ServiceCard: React.FC<Props> = ({
  className,
  description,
  imageSource,
  serviceName,
}) => (
  <div className={cn(styles.card, className)}>
    <div className={styles.image}>
      <Image src={imageSource} fill quality={100} alt={serviceName} />
    </div>
    <h3 className={styles.title}>{serviceName}</h3>
    <p className={styles.text}>{description}</p>
  </div>
);

export default ServiceCard;
