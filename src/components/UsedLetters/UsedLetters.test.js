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
});
