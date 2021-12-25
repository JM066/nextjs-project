import EventItem from "../EventItems";

import styles from "./EventList.module.scss";

function EventLst(props) {
  const { items } = props;
  return (
    <ul className={styles.list}>
      {items.map((item) => {
        return <EventItem key={item.key} item={item} />;
      })}
    </ul>
  );
}
export default EventLst;
