import Head from "next/head";
import React from "react";
import Footer from "../components/layout/Footer";

function About() {
  return (
    <>
      <Head>
        <title>About page</title>
        <meta name="description" content="about page"></meta>
      </Head>
      <div className="content">About</div>
    </>
  );
}

About.getLayout = function pageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};

export default About;

