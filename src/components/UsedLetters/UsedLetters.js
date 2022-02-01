import "./UsedLetters.scss";

const UsedLetters = ({ letters, classUsedLetter }) => {
  return (
    <section className="used-letters-container">
      <h2>Used letters</h2>
      <ul className="used-letters">
        {letters.map((letter, index, letters) =>
          index !== letters.length - 1 ? (
            <li
              key={index}
              className={classUsedLetter}
              data-testid="usedLetter"
            >
              {letter.toUpperCase()}, &nbsp;
            </li>
          ) : (
            <li
              key={index}
              className={classUsedLetter}
              data-testid="usedLetter"
            >
              {letter.toUpperCase()}
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default UsedLetters;
