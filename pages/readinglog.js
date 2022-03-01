import React from "react";
import Navbar from "../src/studentcomponents/navbar";
import ProgressBar from "../src/studentcomponents/progressbar";
import Readinglog from "../src/studentcomponents/readinglog";
import styles from "../styles/readinglogpage.module.css";
import Image from "next/image";
import Link from "next/link";
import BookProgressBar from "../src/studentcomponents/bookprogressbar";

function readinglog({ isNewMessage, studentDaysRead, currentBook, studentId, studentName }) {
   
    
  return (
    <div>
      <div>
        <Navbar isNewMessage={isNewMessage} studentName={studentName} />
        <ProgressBar studentDaysRead={studentDaysRead} />
      </div>
      <div className={styles.pageBody}>
        <div className={styles.leftSide}>
          <img
            src={currentBook.cover}
            alt={currentBook.title}
            width="310"
            height="500"
          />
          <BookProgressBar currentBook={currentBook} />
          <Link href="/studenthome">
            <button className={styles.chooseAgainButton}>
              Choose a different book
            </button>
          </Link>
        </div>
        <div className={styles.rightSide}>
          <Readinglog currentBook={currentBook} studentId={studentId} />
        </div>
      </div>
    </div>
  );
}

export default readinglog;
