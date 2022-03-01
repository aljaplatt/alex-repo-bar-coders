import React, { useState, useEffect } from "react";
import Navbar from "../src/studentcomponents/navbar";
import rocketicon from "../images/rocketicon.png";
import Image from "next/image";
import styles from "../styles/dictionary.module.css";

function Dictionary({ isNewMessage, words, updateWordsList, getWords, studentName }) {
  
  useEffect(() => {
    getWords();
  }, [words]);

  const [searchWord, setSearchWord] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setSearchWord(e.target.value);
    }

  const [meanings, setMeanings] = useState();

  function resetMeanings() {
      setMeanings();
      setSearchWord("");
  }

  const [errorMessage, setErrorMessage] = useState("");

  async function getWord(e) {
    e.preventDefault();
    setErrorMessage("");
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
      );
      const data = await response.json();
      const meanings = data[0].meanings;
        setMeanings(meanings);
        
     
    } catch {
      setErrorMessage("This isn't a word. Check your spelling and try again!");
      }
   
  }

    function handleSubmit(e) {
        e.preventDefault();
       
    if (!words.includes(searchWord)) {
      updateWordsList(searchWord, meanings);
    }
        resetMeanings();
        setSearchWord("");
  }


  return (
    <div>
      <Navbar isNewMessage={isNewMessage} studentName={studentName} />
      <div className={styles.pageBody}>
        <div className={styles.leftImage}>
          <Image src={rocketicon.src} alt="rocket" width="100" height="100" />
        </div>

        <div className={styles.container}>
          <form>
            <h1>Found a word you don&apos;t know?</h1>

            <input
              type="text"
              list="valuelist"
              value={searchWord}
              placeholder="Type new word or choose from this list"
              onChange={handleChange}
            ></input>
            <datalist className={styles.dropdown} id="valuelist">
              {words.map((word, index) => {
                return <option key={index}>{word}</option>;
              })}
            </datalist>

            <button onClick={getWord}>Look it up</button>
            {errorMessage && <p>{errorMessage}</p>}

            <div>
              {meanings && (
                <div>
                  <div className={styles.definitions}>
                    {meanings.map((element, index) => {
                      return (
                        <div key={index}>
                          <h3>
                            {searchWord} ({element.partOfSpeech})
                          </h3>
                          {element.definitions.map((entry, index) => {
                            return <p key={index}>{entry.definition}</p>;
                          })}
                        </div>
                      );
                    })}
                    <button
                      className={styles.resetButton}
                      onClick={resetMeanings}
                    >
                      X
                    </button>
                  </div>
                  <button onClick={handleSubmit}>
                    Add this to my list of words
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
        <div className={styles.rightImage}>
          <Image src={rocketicon.src} alt="rocket" width="100" height="100" />
        </div>
      </div>
    </div>
  );
}

export default Dictionary;
