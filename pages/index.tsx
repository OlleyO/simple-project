import { NextPage } from "next";
import Head from "next/head";

import HomeView from "@views/home";

export const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeView />
    </div>
  );
};

export default Home;
