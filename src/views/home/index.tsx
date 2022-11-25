import Image from "next/image";

import Link from "@components/common/link";

import styles from "./styles.module.scss";

import Layout from "../../components/common/layout";

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
  </Layout>
);

export default Home;
