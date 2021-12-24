import React from "react";
import Link from "next/link";

function EventItem(props) {
  const { title, image, date, location, id } = props;
  const readableDate = new Date(date).toLocaleDateString("eu-Us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <ul>
      {/* <img src="" alt="" /> */}
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>DATE</time>
          </div>
          <div>
            <address>ADDRESS</address>
          </div>
        </div>
        <div>
          <Link href="/">Explore Event</Link>
        </div>
      </div>
    </ul>
  );
}

export default EventItem;
