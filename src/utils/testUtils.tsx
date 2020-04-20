import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";
import * as bookData from "state/ducks/book/__tests__/__mockData__/comicBookData.json";
import { IBook } from "state/ducks/book/types";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer as reducer } from "state/ducks/index";
import { render } from "@testing-library/react";
import { IApplicationState } from "state/ducks/index";
import "@testing-library/jest-dom/extend-expect";

//@ts-ignore
export const getMockBookData = (): IBook[] => [...bookData.default];

interface RouterInterface {
  route?: string;
  history?: any;
}

const defaultRoute = "/";

// allows test to render with only React Router (not a connected Redux component)
export const renderWithRouter: any = (
  ui: React.ReactElement<any>,
  {
    route = defaultRoute,
    history = createMemoryHistory({ initialEntries: [route] }),
  }: RouterInterface = {}
) => {
  const Wrapper = ({ children }: any) => (
    <Router history={history}>{children}</Router>
  );
  return {
    ...render(ui, { wrapper: Wrapper }),
    history,
  };
};

const initialTestingState: IApplicationState = {
  bookData: {
    bookData: getMockBookData(),
    loading: false,
    errors: [],
  },
};

interface ReduxInterface {
  initialState?: any;
  store?: any;
}

// allows test to render with React Router and Redux
export const renderWithAll: any = (
  ui: React.ReactElement<any>,
  {
    route = defaultRoute,
    history = createMemoryHistory({ initialEntries: [route] }),
    initialState = { ...initialTestingState },
    store = createStore(reducer, initialState),
  }: RouterInterface & ReduxInterface = {}
) => {
  const Wrapper = ({ children }: any) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );
  return {
    ...render(ui, { wrapper: Wrapper }),
    history,
  };
};
