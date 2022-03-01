import React from "react";
import "react-step-progress-bar/styles.css";
import styles from "../../../styles/bookprogressbar.module.css";

import { ProgressBar } from "react-step-progress-bar";

function BookProgressBar({ currentBook }) {
//   let pagesRead = currentBook.current_page;
//   let totalPages = currentBook.total_pages;
//     let progress = (pagesRead / totalPages) * 100;
    let percentage = Math.floor(Number(currentBook.percentagecomplete))

  return (
    <div className={styles.progress}>
     <h3 className={styles.text}>This book is {percentage}% completed!</h3>
      <ProgressBar
        percent={percentage}
        filledBackground="linear-gradient(to right, #ACF5DA, #51ECB4)"
      ></ProgressBar>
    </div>
  );
}

export default BookProgressBar;
