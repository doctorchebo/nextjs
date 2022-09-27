import React from "react";

function NewsArticleByCategory({ news, category }) {
  return (
    <>
      <h1>
        News of category <i>{category}</i>
      </h1>
      {news.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.title} {article.description}
            </h2>
            <hr></hr>
          </div>
        );
      })}
    </>
  );
}

export default NewsArticleByCategory;

export const getServerSideProps = async (context) => {
  const { params, req, res, query } = context;
  console.log(query);
  console.log(req.headers.cookie);
  res.setHeader("Set-Cookie", ["Marcelo Cookie"]);
  const { category } = params;
  console.log("Generating News Article List for category " + category)
  const response = await fetch(
    `http://localhost:4000/news/?category=${category}`
  );
  const data = await response.json();
  return {
    props: {
      news: data,
      category: category,
    },
  };
};
