import Star, { StarType, IProps } from "components/Star/Star";
import React from "react";
import { render, cleanup } from "@testing-library/react";

const initialProps: IProps = {
  type: StarType.FULL,
  index: 1,
};

afterAll(() => {
  cleanup();
});

describe("star", () => {
  test("full stars render correctly", () => {
    const { getByTestId } = render(<Star {...initialProps} />);
    const starFullElem = getByTestId("starFull");
    expect(starFullElem).toBeInTheDocument();
  });

  test("empty stars render correctly", () => {
    const { getByTestId } = render(
      <Star {...initialProps} type={StarType.EMPTY} />
    );
    const starEmptyElem = getByTestId("starEmpty");
    expect(starEmptyElem).toBeInTheDocument();
  });
});
