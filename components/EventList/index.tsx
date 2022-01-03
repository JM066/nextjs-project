import EventItem from "../EventItems";

import styles from "./EventList.module.scss";

function EventLst({ items }) {
  console.log("items", items);
  return (
    <ul className={styles.list}>
      {items.map((item: any) => {
        return <EventItem key={item.key} item={item} />;
      })}
    </ul>
  );
}
export default EventLst;
