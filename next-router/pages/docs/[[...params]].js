import React from "react";
import { useRouter } from "next/router";

const Docs = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  if(params.length === 2){
    return <h2>Feature {params[0]}, concept {params[1]}</h2>
  } else if (params.length === 1) {
    return <h2>Feature {params[0]}</h2>
  }
  return <h2>Docs Page</h2>;
};

export default Docs;
