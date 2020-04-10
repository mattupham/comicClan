import Rating from "components/Rating/Rating";
import React from "react";
import { render, cleanup } from "@testing-library/react";

afterAll(() => {
  cleanup();
});

describe("rating", () => {
  test("number of stars render correctly", () => {
    [1, 2, 3, 4, 5].forEach((rating) => {
      const { getAllByTestId } = render(<Rating rating={rating} />);
      const starFullElems = getAllByTestId("starFull");
      expect(starFullElems.length).toBe(rating);

      if (rating !== 5) {
        const starEmptyElems = getAllByTestId("starEmpty");
        expect(starEmptyElems.length).toBe(5 - rating);
      }
      cleanup();
    });
  });
});
