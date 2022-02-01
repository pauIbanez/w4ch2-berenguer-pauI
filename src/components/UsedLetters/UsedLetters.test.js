import { render, screen } from "@testing-library/react";
import React from "react";
import UsedLetters from "./UsedLetters";

describe("Given UsedLetters", () => {
  describe("When it's invoked passing ['a', 'b', 'c', 'd']", () => {
    test("should render component2", () => {
      const usedLetters = ["a", "b", "c", "d"];
      const classes = "used-letter";
      const expectedLength = 4;
      render(<UsedLetters letters={usedLetters} classes={classes} />);

      const elements = screen.getAllByTestId("usedLetter").length;

      expect(elements).toBe(expectedLength);
    });
  });

  describe("When it's invoked passing ['a']", () => {
    test("should render A", () => {
      const usedLetters = ["a"];
      const classes = "used-letter";
      render(<UsedLetters letters={usedLetters} classes={classes} />);

      const element = screen.getAllByTestId("usedLetter")[0];

      expect(element).toBeInTheDocument();
    });
  });

  describe("When it's invoked passing ['e', 'f', 'c']", () => {
    test("should render letter E, F, C", () => {
      const usedLetters = ["e", "f", "c"];
      const classes = "used-letter";

      render(<UsedLetters letters={usedLetters} classes={classes} />);

      const elementE = screen.getByText("E,");
      const elementF = screen.getByText("F,");
      const elementC = screen.getByText("C");
      expect(elementE).toBeInTheDocument();
      expect(elementF).toBeInTheDocument();
      expect(elementC).toBeInTheDocument();
    });
  });
});
