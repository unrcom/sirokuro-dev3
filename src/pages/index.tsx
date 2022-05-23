import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="sirokuro.site">
      <div className="text-center">Welcome to sirokuro.site</div>
    </Layout>
  );
};

export default Home;
