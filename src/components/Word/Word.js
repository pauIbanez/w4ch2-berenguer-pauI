const Word = ({ word, lettersPlayed }) => {
  const baseWordLetters = Array.from(word);
  const baseWordElements = baseWordLetters.map((letter, index) => {
    return <li key={index} className="guess-letter empty"></li>;
  });

  const finalWordToRender = baseWordElements.map((wordElement, index) => {
    if (lettersPlayed.includes(baseWordLetters[index])) {
      return (
        <li key={index} className="guess-letter">
          {baseWordLetters[index].toUpperCase()}
        </li>
      );
    }

    return wordElement;
  });

  return <ul className="guess-letters">{finalWordToRender}</ul>;
};

export default Word;
