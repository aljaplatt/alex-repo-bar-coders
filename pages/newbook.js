import React, { useEffect, useState } from "react";
import Navbar from "../src/studentcomponents/navbar";
import Image from "next/image";
import rocketicon from "../images/rocketicon.png";
import styles from "../styles/newbook.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function Newbook({ isNewMessage, studentId, studentName }) {
  const router = useRouter();

  const [newApiBook, setNewApiBook] = useState();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    bookSearch();
  }, [loading]);

  async function bookSearch() {
    if (title) {
      setErrorMessage("Please wait...");
      try {
        const response = await fetch(
          `https://openlibrary.org/search.json?title=${title}&author=${author}`
        );
        const data = await response.json();

        console.log(data.docs[0]);
        console.log(data.docs[0].author_name[0]);
        console.log(data.docs[0].title);
        console.log(data.docs[0].number_of_pages_median);
        console.log(data.docs[0].cover_edition_key); //use to fetch cover art
        console.log(data.docs[0].isbn[0]); //book id to be added to database

        setNewApiBook({
          id: data.docs[0].isbn[0],
          studentId: studentId,
          title: data.docs[0].title,
          cover: `https://covers.openlibrary.org/b/olid/${data.docs[0].cover_edition_key}-L.jpg`,
          author: data.docs[0].author_name[0],
          totalPages: data.docs[0].number_of_pages_median,
        });
        setErrorMessage("");
      } catch {
        setErrorMessage(
          "No matches found. Did you fill in all the details and spell everything correctly?"
        );
      }
    }
  }

  async function addBookToDatabase() {
    try {
      const url = "https://fourweekproject.herokuapp.com/books";
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newApiBook),
      });
      router.push("/studenthome");
    } catch {
      alert("Sorry the server is down, please try later");
    }
  }

  return (
    <div>
      <Navbar isNewMessage={isNewMessage} studentName={studentName} />
      <div className={styles.pageBody}>
        <div className={styles.leftImage}>
          <Image src={rocketicon.src} alt="rocket" width="100" height="100" />
        </div>

        <div className={styles.container}>
          <h1>Search for a new book</h1>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Book title"
          ></input>
          <input
            type="text"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            placeholder="Author"
          ></input>
          <button
            onClick={() => {
              setLoading(!loading);
            }}
          >
            Search
          </button>

          {errorMessage && <p>{errorMessage}</p>}
          {newApiBook && (
            <div>
              <p>Is this your book?</p>
              <h3>{newApiBook.title}</h3>
              <p>by {newApiBook.author}</p>
              <div className={styles.buttonDiv}>
                <button onClick={addBookToDatabase}>
                  Yes, this is my book
                </button>
                <Link href="/cantfindbook" passHref>
                  <button>No, let me add the details myself</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className={styles.rightImage}>
          <Image src={rocketicon.src} alt="rocket" width="100" height="100" />
        </div>
      </div>
    </div>
  );
}

export default Newbook;
