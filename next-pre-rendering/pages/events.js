import React, { useState } from "react";
import { useRouter } from "next/router";

function EventsList({ EventList }) {
  const router = useRouter();
  const [data, setdata] = useState(EventList);
  const getSportEvents = async () => {
    const response = await fetch(
      "http://localhost:4000/events?category=sports"
    );
    const data = await response.json();
    setdata(data);
    router.push("/events?category=sports", undefined, {
      shallow: true,
    });
  };
  return (
    <div>
      <h1>List of events</h1>
      <button onClick={getSportEvents}>Get Sport Events</button>
      {data.map((event) => {
        return (
          <div key={event.id}>
            <h2>
              {event.id} {event.date} {event.title} | {event.category}
            </h2>
            <p>{event.description}</p>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
}

export default EventsList;

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();
  return {
    props: {
      EventList: data,
    },
  };
};
