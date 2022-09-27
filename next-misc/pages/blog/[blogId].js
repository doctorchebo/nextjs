import Head from "next/head";
import React from "react";

function Post({ title, content }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content}></meta>
      </Head>
      <div className="content">Post</div>
      <h2>Dashboard secret: {process.env.NEXT_PUBLIC_DASHBOARD_SECRET}</h2>
    </>
  );
}

export default Post;

export const getServerSideProps = async () => {
  console.log("DB password is " + process.env.DB_PASSWORD);
  return {
    props: {
      title: "Post",
      content: "Post content",
    },
  };
};

export const getServerSidePaths = async () => {
    return {
        params: [{blogId: '1'}],
        fallback: false
    }
}
