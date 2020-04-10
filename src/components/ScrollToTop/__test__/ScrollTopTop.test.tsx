import React from "react";
import { cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { renderWithAll } from "utils/testUtils";
import ScrollToTop from "components/ScrollToTop/ScrollToTop";

describe("scrollToTop", () => {
  test("changing route triggers scrollTo", () => {
    const scrollToSpy = jest
      .spyOn(window, "scrollTo")
      .mockImplementation(() => {});
    const { history } = renderWithAll(<ScrollToTop />, {
      route: "/books/year",
    });
    history.push("/");
    expect(scrollToSpy).toHaveBeenCalled();
    cleanup();
  });
});
