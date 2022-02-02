import { useState } from "react";
import "./Letter_style.scss";

const Letter = ({ letter, actionOnClick, deactivatedClass }) => {
  const [active, setActive] = useState(true);
  const onClick = () => {
    actionOnClick();
    setActive(false);
  };
  return (
    <li
      className={`letter${active ? "" : ` ${deactivatedClass}`}`}
      onClick={onClick}
    >
      <a href="d">{letter}</a>
    </li>
  );
};

export default Letter;
