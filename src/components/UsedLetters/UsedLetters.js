import "./UsedLetters.scss";

const UsedLetters = ({ letters }) => {
  return letters.reduce((acc, letter) => `${acc}${letter}, `, "");
};

export default UsedLetters;
