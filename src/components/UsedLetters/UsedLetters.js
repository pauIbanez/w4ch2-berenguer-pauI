
import "./UsedLetters.scss";

const UsedLetters = ({ letters, classUsedLetter }) => {
  return (
    <section className="used-letters-container">
      <h2>Used letters</h2>
      <ul className="used-letters">
        {letters.map((letter, i, letters) =>
          i !== letters.length - 1 ? (
            <li className={classUsedLetter}>{`${letter}, `}</li>
          ) : (
            <li className={classUsedLetter}>{`${letter}`}</li>
          )
        )}
      </ul>
    </section>
  );
};


export default UsedLetters;
