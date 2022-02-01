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

  describe("When it's invoked passing 'testing' and ['t', 'e'] as lettersPlayed", () => {
    test("Then it should render 4 elements with className 'guess-letter empty' and 2 with the text 'T'", () => {
      const word = "testing";
      const playedLetters = ["t", "e"];
      const expectedEmptyLength = 4;
      const expectedNotEmptyLength = 2;

      render(<Word word={word} lettersPlayed={playedLetters} />);
      const emptyElements = screen
        .queryAllByText("")
        .filter((element) => element.className === "guess-letter empty").length;

      const notEmptyElements = screen
        .queryAllByText("T")
        .filter((element) => element.className === "guess-letter").length;

      expect(emptyElements).toBe(expectedEmptyLength);
      expect(notEmptyElements).toBe(expectedNotEmptyLength);
    });
  });
});
