import React from "react";
import styles from "../../../styles/window.module.css";
import bag from "../../../images/bag.png";
import Image from "next/image";

function infoWindow({minutesRead}) {
  return (
    <div className={styles.window}>
      <div className={styles.inner}>
        <h1>Select a book to log today&apos;s reading </h1>
        <p1>
          You&apos;ve earned <h2 className={styles.coinNumber}>{minutesRead}</h2> coins this week! Keep going!
        </p1>
        {/* <p2>You need {30} more coins to unlock the next icon!</p2> */}
        <div className={styles.image}>
          <Image src={bag.src} alt="icon" width="160px" height="150px" />
        </div>
      </div>
    </div>
  );
}

export default infoWindow;
