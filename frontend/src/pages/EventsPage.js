import React from "react";
import { Link } from "react-router-dom";

const DUMMY = [
  {
    id: "e1",
    title: "Exuburance",
  },
  {
    id: "e2",
    title: "Verve",
  },
];

const EventsPage = () => {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {DUMMY.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
