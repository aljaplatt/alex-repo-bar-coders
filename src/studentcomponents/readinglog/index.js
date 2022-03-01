import { Link, useState } from 'react'
import styles from '../../../styles/readinglog.module.css'
import { useRouter } from "next/router";


function Readinglog({ currentBook, studentId }) {

  const router = useRouter();
  
  const [page, setPage] = useState();
  const [minutes, setMinutes] = useState();
  const [summary, setSummary] = useState();
  const [isComplete, setIsComplete] = useState(false);


 async function handleSubmit (event) {
   event.preventDefault()
  console.log({
    bookId: currentBook.id,
    studentId: studentId,
    currentPage: page,
    summary: summary,
    iscomplete: isComplete,
    minutesRead: minutes,
  }); 
         try {
          const url = "https://fourweekproject.herokuapp.com/summaries";
          await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              bookId: currentBook.id,
              studentId: studentId,
              currentPage: page,
              summary: summary,
              isComplete: isComplete,
              minutesRead: minutes,
            }),
          });
          router.push("/studenthome");
        } catch {
          alert("Sorry the server is unavailable, please try later");
        }
  }
  
 
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>{currentBook.title}</h1>

        <input
          type="text"
          value={page}
          onChange={(e) => setPage(e.target.value)}
          placeholder="What page did you finish on?"
          required
        ></input>

        <input
          type="text"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          placeholder="How many minutes did you read for?"
          required
        ></input>

        <textarea
          rows="4"
          cols="50"
          type="text"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="Summarise today's reading in one or two sentences"
          className={styles.summary}
          required
        ></textarea>

        <div className={styles.buttons}>
          {/* <Link href="studenthome" passHref> */}
          <button type="submit">Submit</button>
          {/* </Link> */}
          <label>
            Finished the book?
            <input value={isComplete}
              onClick={() => { setIsComplete(!isComplete) }}
              type="checkbox"></input>
          </label>
        </div>
      </form>
    </div>
  );
}

export default Readinglog