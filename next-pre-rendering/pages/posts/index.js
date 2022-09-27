import React from "react";
import Link from "next/link";

const PostsList = ({ posts }) => {
  return (
    <>
      <h1>Posts List</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`} passHref>
              <p>
                {post.id} {post.title}
              </p>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default PostsList;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
};
