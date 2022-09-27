import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
const ProductDetails = () => {
    const router = useRouter();
    const productId = router.query.productId;
  return (
    <>
      <h2>Details of product {productId}</h2>
      <Link href='/'>
        <a>Home</a>
      </Link>
    </>
  )
}

export default ProductDetails;