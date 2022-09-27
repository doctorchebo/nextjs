import React from 'react'
import useSWR from 'swr'

const fetcher = async ()=>{
    const response = await fetch("http://localhost:4000/dashboard");
    const data = await response.json();
    return data;
}

function DashboardSWR() {
    const {data, error} = useSWR("http://localhost:4000/dashboard", fetcher)
    if(error) return "An error occurred"
    if(!data) return "No data was found"
    return (
        <>
          <h1>Dashboard</h1>
          <h2>Posts: {data.posts}</h2>
          <h2>Likes: {data.likes}</h2>
          <h2>Followers: {data.followers}</h2>
          <h2>Following: {data.following}</h2>
        </>
      );
}

export default DashboardSWR