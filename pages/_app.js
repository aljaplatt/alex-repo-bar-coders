import "../styles/globals.css";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  //studentId - to be set via Auth?
  const [studentId, setStudentId] = useState("s01");

  //studentname - to be set Via fetch

  const [studentName, setStudentName] = useState("name");

  //Added in case we use it as a stretch goal - notification if a "new" message is received
  const [isNewMessage, setIsNewMessage] = useState(true);

  // Used in the progress bar - need to work out how many days the student has read this week. Function to fetch data from database and calculate this needs to be written still
  const [studentDaysRead, setStudentDaysRead] = useState(3);

  //used in studenthome to match coins earned
  const [minutesRead, setMinutesRead] = useState(45);

  //Used in the book carousel (& other places?) Need to write fetch request to get data from database. Initial state is just an example to check code works
  const [inProgressBooks, setInProgressBooks] = useState([
    
    {
      id: 2,
      title: "Harry Potter and the Philosopher's Stone",
      current_page: 146,
      total_pages: 223,
      percentagecomplete: 65,
      cover: "https://pictures.abebooks.com/isbn/9780747549550-uk.jpg",
    },
    {
      id: 3,
      title: "Artemis Fowl",
      current_page: 98,
      total_pages: 280,
      percentagecomplete: 35,
      cover:
        "https://www.artemis-fowl.com/wp-content/uploads/2019/03/2019-artemis-fowl-cover-book-one.jpg",
    },
    {
      id: 4,
      title: "Unknown Book",
      current_page: 1,
      total_pages: 150,
      percentagecomplete: 0,
      cover: "https://www.wallpaperuse.com/wallp/42-425257_m.jpg",
    },
  ]);

  //Current book that is being updated in the reading log:
  const [currentBook, setCurrentBook] = useState({
    id: 2,
    title: "Harry Potter and the Philosopher's Stone",
    current_page: 145,
    total_pages: 223,
    percentagecomplete: 65,
    cover: "https://pictures.abebooks.com/isbn/9780747549550-uk.jpg",
  });

  //function to update current book depending on what is clicked in the book carousel:
  function updateCurrentBook(bookId) {
    let selectedBook = inProgressBooks.find((book) => {
      return book.id == bookId;
    });
    setCurrentBook(selectedBook);
  }

  //Used in dictionary - new word list
  const [words, setWords] = useState(["facilitate", "diminish", "gravitate"]);

  async function getWords() {
    try {
      const response = await fetch(
        `https://fourweekproject.herokuapp.com/dictionary/${studentId}`
      );
      const data = await response.json();
      let wordArray = data.payload;
      let array = wordArray.map((entry) => {
        return entry.word;
      });
      setWords(array);
    } catch {
      setWords(["Sorry, this feature is currently unavailable."]);
    }
  }

  //function to fetch studentName
  async function getStudentData() {
    try {
      const response = await fetch(
        `https://fourweekproject.herokuapp.com/books/${studentId}`
      );
      const data = await response.json();
      console.log(data);
      console.log(data.progressData[0].name);
      console.log(data.progressData[0].count);
      console.log(data.progressData[0].minutes_total);
      console.log(data.bookData);

      setStudentName(data.progressData[0].name);
      setStudentDaysRead(data.progressData[0].count);
      setInProgressBooks(data.bookData);
      setMinutesRead(data.progressData[0].minutes_total);
    } catch {
      console.log("error within getStudentData");
    }
  }

  async function getStudentName() {
    try { 
      const response = await fetch(
        `https://fourweekproject.herokuapp.com/books/${studentId}`
      );
      const data = await response.json();
       setStudentName(data.progressData[0].name);
    }
    catch { alert("Server error")}
  }

  useEffect(() => {
    getStudentName();
  },[])

  //adds new words to dictionary word list
  async function updateWordsList(newWord, meaning) {
    try {
      const url = "https://fourweekproject.herokuapp.com/dictionary";
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentId: studentId,
          word: newWord,
          definition: meaning,
        }),
      });
    } catch {
      alert("Sorry, this feature is currently unavailable");
    }
  }

  return (
    <Component
      {...pageProps}
      studentName={studentName}
      studentId={studentId}
      isNewMessage={isNewMessage}
      studentDaysRead={studentDaysRead}
      inProgressBooks={inProgressBooks}
      currentBook={currentBook}
      updateCurrentBook={updateCurrentBook}
      words={words}
      updateWordsList={updateWordsList}
      getWords={getWords}
      minutesRead={minutesRead}
      getStudentData={getStudentData}
    />
  );
}

export default MyApp;
