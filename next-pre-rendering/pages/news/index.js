import React from "react";

function NewsArticleList({ news }) {
  return (
    <>
      <h2>List of news articles</h2>
      {news.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} {article.title} | {article.category}
            </h2>
          </div>
        );
      })}
    </>
  );
}

export default NewsArticleList;

export const getServerSideProps = async () => {
  console.log("Generating News Article List");
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();
  return {
    props: {
      news: data,
    },
  };
};
