import App from "components/App/App";
import React from "react";
// import { renderWithRouter } from "utils/testUtils";
import { cleanup, render, fireEvent } from "@testing-library/react";
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
    history = createMemoryHistory({ initialEntries: [defaultRoute] }),
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

describe("app", () => {
  test("app renders correct components", () => {
    jest.spyOn(window, "scrollTo").mockImplementation(() => {});
    const { getByTestId, getAllByTestId } = renderComponent();
    expect(getByTestId("main")).toBeInTheDocument();
    expect(getByTestId("header")).toBeInTheDocument();

    fireEvent.click(getAllByTestId("bookLink")[0]);
    expect(window.scrollTo).toHaveBeenCalled();

    cleanup();
  });

  // book clicked, scrolled to top, route changed
});
