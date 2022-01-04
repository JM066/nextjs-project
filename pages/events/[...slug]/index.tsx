import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import EventList from "../../../components/EventList";

function FilteredEvents() {
  const router = useRouter();
  const filteredData = router.query.slug;
  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];
  const year = +filteredYear;
  const month = +filteredMonth;

  const [data, setData] = useState({});
  const [events, setEvents] = useState([]);

  const getFiltered = async () => {
    const response = await fetch(
      "https://nextjs-project-eb4c9-default-rtdb.firebaseio.com/events.json"
    );
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getFiltered();
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
      <p>
        {filteredDate.getFullYear()} / {filteredDate.getMonth() + 1}
      </p>
      <EventList items={filteredEvents} />
    </div>
  );
}
export default FilteredEvents;
