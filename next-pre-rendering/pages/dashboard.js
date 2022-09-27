import React from "react";
import { useEffect, useState } from "react";

function Dashboard() {
  const [dashBoardData, setDashboardData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getDashboardData = async () => {
      const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();
      setDashboardData(data);
      setIsLoading(false);
    };
    getDashboardData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <h1>Dashboard</h1>
      <h2>Posts: {dashBoardData.posts}</h2>
      <h2>Likes: {dashBoardData.likes}</h2>
      <h2>Followers: {dashBoardData.followers}</h2>
      <h2>Following: {dashBoardData.following}</h2>
    </>
  );
}

export default Dashboard;
