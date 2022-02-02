import { useState } from "react";
import "./app.scss";
import Hangman from "./components/Hangman/Hangman";
import Letter from "./components/Letter/Letter";
import UsedLetters from "./components/UsedLetters/UsedLetters";
import Word from "./components/Word/Word";

function App() {
  const defaultLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const [playedLetters, setPlayedLetters] = useState([]);
  const [failCounter, setFailedCounter] = useState(0);
  const [playing, setPlaying] = useState(true);
  const word = "hello";

  if (playing && failCounter === 11) {
    // console.log("You loose");
    setPlaying(false);
  }

  let checksum = 0;
  Array.from(word.toUpperCase()).forEach((letter) => {
    if (playedLetters.includes(letter)) {
      checksum += 1;
    }
  });
  if (playing && checksum === word.length) {
    // console.log("You win");
    setPlaying(false);
  }

  const onLetterClick = (id) => {
    if (playing) {
      const newPlayedLetters = [...playedLetters];
      newPlayedLetters.push(defaultLetters[id]);
      setPlayedLetters(newPlayedLetters);
      if (!Array.from(word.toUpperCase()).includes(defaultLetters[id])) {
        setFailedCounter(failCounter + 1);
      }
    }
  };

  const letterComponents = defaultLetters.map((letter, index) => {
    return (
      <Letter
        letter={letter}
        key={index}
        actionOnClick={() => {
          onLetterClick(index);
        }}
        deactivatedClass="letter--deactivated"
      />
    );
  });

  return (
    <>
      <div className="game-container">
        <Hangman numberOfFails={failCounter} />
        <Word word={word} lettersPlayed={playedLetters} />
        <UsedLetters letters={playedLetters} />
        {!playing && (
          <section className="game-result">
            {failCounter >= 11 ? `You're dead` : `You win!`}
          </section>
        )}
        <ul className="letters">{letterComponents}</ul>
      </div>
    </>
  );
}

export default App;
