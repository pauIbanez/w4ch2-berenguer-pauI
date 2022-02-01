import { render, screen } from "@testing-library/react";
import React from "react";
import Word from "./Word";

describe("Given Word", () => {
  describe("When it's invoked passing 'testing'", () => {
    test("Then it should render 7 elements with className 'guess-letter empty'", () => {
      const word = "testing";
      const playedLetters = [];
      const expectedLenght = 7;

      render(<Word word={word} lettersPlayed={playedLetters} />);
      const elements = screen
        .queryAllByText("")
        .filter((element) => element.className === "guess-letter empty").length;

      expect(elements).toBe(expectedLenght);
    });
  });
});
