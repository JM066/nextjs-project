import Link from "next/link";
import React from "react";

import style from "./MainHeader.module.scss";

const MainHeader = (props) => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={style.navigation}>
        <ul>
          <li>
            <Link
              href={{
                pathname: "/events",
              }}
            >
              Browse All Events
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;
