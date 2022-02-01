const Word = ({ word, lettersPlayed }) => {
  const baseWordLetters = Array.from(word);

  const finalWordToRender = baseWordLetters.map((letter, index) => {
    if (lettersPlayed.includes(baseWordLetters[index])) {
      return (
        <li key={index} className="guess-letter">
          {letter.toUpperCase()}
        </li>
      );
    }

    return <li key={index} className="guess-letter empty"></li>;
  });

  return <ul className="guess-letters">{finalWordToRender}</ul>;
};

export default Word;
