import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import EventList from "../../../components/EventList";

function FilteredEvents({ filtered }) {
  const router = useRouter();
  const [data, setData] = useState({});
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(router.query.slug);

  const getFiltered = async () => {
    const response = await fetch(
      "https://nextjs-project-eb4c9-default-rtdb.firebaseio.com/events.json"
    );
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getFiltered();
    setSelectedDate(filtered);
  }, []);

  useEffect(() => {
    if (data) {
      const events = [];
      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }
      setEvents(events);
    }
  }, [data]);

  if (!events) {
    return <p>There are no events</p>;
  }
  const filteredYear = selectedDate[0];
  const filteredMonth = selectedDate[1];
  const year = +filteredYear;
  const month = +filteredMonth;

  let headData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="description"
        content="Find all the coding related events here"
      />
    </Head>
  );
  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2022 ||
    year < 2020 ||
    month > 12 ||
    month < 1
  ) {
    return <p>Invalid filter, please adjust your values.</p>;
  }
  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() + 1 === month
    );
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div>
        <p>No filtered data found</p>
      </div>
    );
  }
  const filteredDate = new Date(year, month - 1);
  return (
    <div>
      {headData}
      <p>
        {filteredDate.getFullYear()} / {filteredDate.getMonth() + 1}
      </p>
      <EventList items={filteredEvents} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const filtered = params.slug;

  return {
    props: {
      filtered: filtered,
    },
  };
}
export default FilteredEvents;
