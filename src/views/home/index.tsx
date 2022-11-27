import Image from "next/image";

import Link from "@components/common/link";

import styles from "./styles.module.scss";

import Layout from "../../components/common/layout";
import ServiceCard from "@components/service-card";

const services = [
  {
    serviceName: "Search doctor",
    description:
      "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    imageSource: "/Frame.png",
  },
  {
    serviceName: "Online pharmacy",
    description:
      "Buy  your medicines with our mobile application with a simple delivery system",
    imageSource: "/Frame-1.png",
  },
  {
    serviceName: "Consultation",
    description:
      "Free consultation with our trusted doctors and get the best recomendations",
    imageSource: "/Frame-2.png",
  },
  {
    serviceName: "Details info",
    description:
      "Free consultation with our trusted doctors and get the best recomendations",
    imageSource: "/Frame-3.png",
  },
  {
    serviceName: "Emergency care",
    description:
      "You can get 24/7 urgent care for yourself or your children and your lovely family",
    imageSource: "/Frame-4.png",
  },
  {
    serviceName: "Tracking",
    description: "Track and save your medical history and health data",
    imageSource: "/Frame-5.png",
  },
];

const Home: React.FC = () => (
  <Layout>
    <section className={styles.section1}>
      <div className={styles.left}>
        <h1 className={styles.title}>Virtual healthcare for you</h1>
        <p className={styles.text}>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <Link className={styles.link} href="find-doctor" variant="button">
          Consult today
        </Link>
      </div>
      <div className={styles.right}>
        <Image alt="" src="/trafalgar-header.png" fill />
      </div>
    </section>
    <section className={styles.section2}>
      <h2 className={styles.title}>Services</h2>
      <p className={styles.text}>
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>
      <div className={styles.services}>
        {services.map((service) => (
          <ServiceCard
            className={styles.card}
            key={service.serviceName}
            {...service}
          />
        ))}
      </div>
      <Link
        className={styles["learn-more-button"]}
        href="about-us"
        variant="button-outlined"
      >
        Learn more
      </Link>
    </section>
  </Layout>
);

export default Home;
