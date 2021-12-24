function EventLst(props) {
  const { items } = props;
  return (
    <ul>
      {items.map((event) => (
        <EventItem />
      ))}
    </ul>
  );
}
export default EventLst;
