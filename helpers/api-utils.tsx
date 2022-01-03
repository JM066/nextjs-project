export async function getAllEvents() {
  const response = await fetch(
    "https://nextjs-project-eb4c9-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();
  const events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
}
export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(eventId) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === eventId);
}
