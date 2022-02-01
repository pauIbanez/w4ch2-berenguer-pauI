import { render, screen } from "@testing-library/react";
import React from "react";
import Letter from "./Letter";

describe("Given Letter", () => {
  describe("When it's invoked passing letter 'A'", () => {
    test("Then it should render an a with the letter A", () => {
      const letter = "A";
      const expectedtext = "A";

      render(<Letter letter={letter} />);
      const element = screen.getByText(expectedtext);

      expect(element).toBeInTheDocument();
    });
  });

  describe("When it's invoked passing letter an actionOnClick", () => {
    test("Then it should invoke actionOnClick when clicked", () => {
      const actionOnClick = jest.fn();
      const letter = "A";

      render(<Letter letter={letter} actionOnClick={actionOnClick} />);
      const element = screen.getByText(letter);
      console.log(element);
      element.click();

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
