import { getSession } from "next-auth/react";
import React from "react";

function Blog({ data }) {
  return <h1>{data}</h1>;
}

export default Blog;

export const getServerSideProps = async (context) => {
  const session  = await getSession(context);
  if(!session){
    return {
      redirect: {
        destination: '/api/auth/signin?callbackUrl=http://localhost:3000/blog',
        permanent: false
      }
    }
  }
  return {
    props: {
      session,
      data: session ? "Premium Blogs" : "Free Blogs",
    },
  };
};
