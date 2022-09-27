import React from "react";
import { useRouter } from "next/router";

const PostDetail = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>Post Detail # {post.id}</h1>
      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
    </>
  );
};

export default PostDetail;

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  // const paths = data.map(post=>{
  //   return {
  //     params: {postId: `${post.id}`}
  //   }
  // })
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: data,
    },
  };
};
