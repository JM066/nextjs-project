import React from "react";

import Button from "../Button";

import styles from "./EventItems.module.scss";

function EventItem({ item: { id, title, image, date, location } }) {
  const readableDate = new Date(date).toLocaleDateString("eu-Us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location?.replace(", ", "\n");

  const exploreLink = `/events/${id}`;
  return (
    <li className={styles.item}>
      <img src={`/${image}`} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <time>{readableDate}</time>
          </div>
          <div className={styles.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>Explore Event</Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
