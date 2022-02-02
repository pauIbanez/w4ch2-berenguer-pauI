import "./UsedLetters_style.scss";

const UsedLetters = ({ letters }) => {
  return (
    <section className="used-letters-container">
      <h2>Used letters</h2>
      <ul className="used-letters">
        {letters.map((letter, index, letters) =>
          index !== letters.length - 1 ? (
            <li className="used-letter" key={index} data-testid="usedLetter">
              {letter.toUpperCase()}, &nbsp;
            </li>
          ) : (
            <li className="used-letter" key={index} data-testid="usedLetter">
              {letter.toUpperCase()}
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default UsedLetters;
