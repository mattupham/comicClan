import App from "components/App/App";
import React from "react";
import { cleanup, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { renderWithAll } from "utils/testUtils";
import axiosMock from "components/App/__mocks__/Axios";

const renderComponent = () => renderWithAll(<App />);

beforeAll(() => {
  jest.spyOn(window, "scrollTo").mockImplementation(() => {});
});

afterAll(() => {
  cleanup();
});

describe("app", () => {
  // test("app renders correct components", () => {
  //   const { getByTestId } = renderComponent();
  //   expect(getByTestId("main")).toBeInTheDocument();
  //   expect(getByTestId("header")).toBeInTheDocument();
  // });

  // test("renders loading spinner on load", () => {
  //   const { getByTestId } = renderComponent();
  //   expect(getByTestId("loader")).toBeInTheDocument();
  // });

  it("Async axios request works", async () => {
    //@ts-ignore
    axiosMock.get.mockResolvedValue({ data: [] });

    // const url = "https://jsonplaceholder.typicode.com/posts/1";
    const { getByTestId, debug } = renderWithAll(<App />);

    // expect(getByText(/...Loading/i).textContent).toBe("...Loading");
    expect(getByTestId("loader")).toBeInTheDocument();

    const resolvedEl = await waitForElement(() => getByTestId("search"));
    debug();
    expect(resolvedEl).toBeInTheDocument();

    // expect(axiosMock.get).toHaveBeenCalledTimes(1);
    // expect(axiosMock.get).toHaveBeenCalledWith(url);
    // expect(axiosMock.get).toHaveBeenCalledTimes(1);
  });

  // test("landing on a bad page shows 404 page", () => {
  //   const { getByText } = renderWithAll(<App />, { route: "/bad" });
  //   expect(getByText("Page Not Found")).toBeInTheDocument();
  // });

  // test("scrolls to top after clicking a book", () => {
  //   const { getAllByTestId } = renderComponent();
  //   fireEvent.click(getAllByTestId("bookLink")[0]);
  //   expect(window.scrollTo).toHaveBeenCalled();
  // });
});
