/* eslint-disable testing-library/no-node-access */
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
      const element = screen.getByText(letter).parentElement;
      element.click();

      expect(actionOnClick).toHaveBeenCalled();
    });
  });

  describe("When it's invoked passing letter an actionOnClick and a deactivatedClass 'deactivated'", () => {
    test("Then it should invoke actionOnClick when clicked and add the class 'deactivated'", () => {
      const actionOnClick = jest.fn();
      const letter = "A";
      const deactivatedClass = "deactivated";

      render(
        <Letter
          letter={letter}
          actionOnClick={actionOnClick}
          deactivatedClass={deactivatedClass}
        />
      );
      const element = screen.getByText(letter).parentElement;
      element.click();

      expect(actionOnClick).toHaveBeenCalled();
      expect(element.className).toMatch(deactivatedClass);
    });
  });
});
