import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import * as bookData from "state/ducks/book/__tests__/__mockData__/comicBookData.json";
import { IBook } from "state/ducks/book/types";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer as reducer } from "state/ducks/index";

//@ts-ignore
export const getMockBookData = (): IBook[] => [...bookData.default];

interface RouterInterface {
  route?: string;
  history?: any;
}

const defaultRoute = "/";

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
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  };
};

// test-utils.js
export const renderWithRedux: any = (
  ui: React.ReactElement<any>,
  {
    initialState = {},
    store = createStore(reducer, initialState),
    ...renderOptions
  }: any = {}
) => {
  function Wrapper({ children }: any) {
    return <Provider store={store}>{children}</Provider>;
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};
