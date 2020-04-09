import App from "components/App/App";
import React from "react";
// import { renderWithRouter } from "utils/testUtils";
import { cleanup, render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
// import { createStore } from "redux";
import configureStore from "state";
import { GROUP } from "components/Groups/Groups";
import { IApplicationState } from "state/ducks/index";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";
import { rootReducer as reducer } from "state/ducks/index";
import { Router } from "react-router-dom";
import { renderWithRouter, getMockBookData } from "utils/testUtils";
import { act } from "react-dom/test-utils";
import { capitalizeFirstLetter } from "utils/utils";

// should render scroll to top
// should render header
// should render main container
// 404 should render 404 screen

const initialTestingState: IApplicationState = {
  bookData: {
    bookData: getMockBookData(),
    loading: false,
    errors: [],
  },
  group: {
    group: GROUP.YEAR,
  },
};

const store = configureStore(initialTestingState);

interface RouterInterface {
  route?: string;
  history?: any;
}

const defaultRoute = "/";

export const renderWithAll: any = (
  ui: React.ReactElement<any>,
  {
    route = defaultRoute,
    history = createMemoryHistory({ initialEntries: [route] }),
  }: RouterInterface = {}
) => {
  const Wrapper = ({ children }: any) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );
  return {
    ...render(ui, { wrapper: Wrapper }),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  };
};

const renderComponent = () => renderWithAll(<App />);

beforeAll(() => {
  jest.spyOn(window, "scrollTo").mockImplementation(() => {});
});

afterAll(() => {
  cleanup();
});

describe("app", () => {
  test("app renders correct components", () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId("main")).toBeInTheDocument();
    expect(getByTestId("header")).toBeInTheDocument();
  });

  test("scrolls to top after clicking a book", () => {
    const { getAllByTestId } = renderComponent();
    fireEvent.click(getAllByTestId("bookLink")[0]);
    expect(window.scrollTo).toHaveBeenCalled();
  });

  test("clicking book changes route", () => {
    const { history } = renderWithAll(<App />, {
      route: "/books/year",
    });
    const { getAllByTestId } = renderComponent();
    fireEvent.click(getAllByTestId("bookLink")[0]);
    expect(history.location.pathname).toContain("/book/");
  });

  test("clicking book changes route", () => {
    const { history } = renderWithAll(<App />, {
      route: "/books/year",
    });
    const { getAllByTestId } = renderComponent();
    fireEvent.click(getAllByTestId("bookLink")[0]);
    expect(history.location.pathname).toContain("/book/");
  });

  test("clicking button changes route", () => {
    const { getByText, history } = renderComponent();
    Object.values(GROUP).forEach((group) => {
      fireEvent.click(getByText(capitalizeFirstLetter(group)), { button: 0 });
      expect(history.location.pathname).toContain(`/books/${group}`);
    });
  });

  test("clicking book opens book page", () => {
    const { queryByTestId, getAllByTestId, history } = renderComponent();
    const bookElem = getAllByTestId("bookLink")[0];
    expect(queryByTestId("bookPage")).toBeNull();
    fireEvent.click(bookElem);
    expect(queryByTestId("bookPage")).not.toBeNull();
    const bookName = queryByTestId("bookDetailsName").innerHTML;
    const actualPath = decodeURIComponent(history.location.pathname);
    const expectedPath = `/book/${bookName}`;
    expect(expectedPath).toContain(actualPath);
  });

  test("landing on a bad page shows 404 page", () => {
    const { getByText } = renderWithAll(<App />, { route: "/bad" });
    expect(getByText("Page Not Found")).toBeInTheDocument();
  });
});
