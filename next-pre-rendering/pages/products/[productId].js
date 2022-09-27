import { useRouter } from 'next/router';
import React from 'react'

function Product({product}) {
    const router = useRouter    ();
    if (router.isFallback) {
      return <h1>Loading...</h1>;
    }
    return (
      <>
        <h1>Post Detail # {product.id}</h1>
        <p>Title: {product.title}</p>
        <p>Body: {product.price}</p>
        <p>Description: {product.description}</p>
        <hr></hr>
      </>
    );
}

export default Product

export const getStaticProps = async (context) => {
    const {params}  = context;
    const response = await fetch(`http://localhost:4000/products/${params.productId}`);
    const data = await response.json();
    return {
        props: {
            product: data,
        },
        revalidate: 10,
    }
}

export const getStaticPaths = () => {
    return {
        paths: [
            {
                params: {productId: "1" }
            }
        ],
        fallback: true,
    }
}
