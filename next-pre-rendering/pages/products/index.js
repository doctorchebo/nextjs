import React from "react";

function ProductsList({ products }) {
  return (
    <>
      <h2>Products List</h2>
      <div>
        {products.map((product) => {
          return (
            <h2 key={product.id}>
              {product.id} {product.title} {product.price}
            </h2>
          );
        })}
      </div>
    </>
  );
}

export default ProductsList;

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();
  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
};
