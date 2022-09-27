import Image from "next/image";
import React from "react";
import img from '../public/1.jpg'

function FoodPage() {
  return <>
    <Image src={img} alt='food' placeholder='blur' height='280' width='423'/>
    <div>{["1", "2", "3", "4", "5"].map((path) => {
    return <Image key={path} src={`/${path}.jpg`} alt='food' height='280' width='423'/>
  })}</div>
  </>;
}

export default FoodPage;
