import React from "react";
import Link from "next/link";

const Products = ({ productId = 100 }) => {
  return (
    <>
      <h2>
        <Link href="/products/1">
          <a>Product 1</a>
        </Link>
      </h2>
      <h2>
        <Link href="/products/2" replace>
          <a>Product 2</a>
        </Link>
      </h2>
      <h2>
        <Link href={`/products/${productId}`}>
          <a>Product {productId}</a>
        </Link>
      </h2>
    </>
  );
};

export default Products;
