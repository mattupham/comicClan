import React, { ReactNode, FC } from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory, MemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";
import * as bookData from "state/ducks/book/__tests__/__mockData__/comicBookData.json";
import { IBook } from "state/ducks/book/types";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer as reducer } from "state/ducks/index";
import { render, RenderResult } from "@testing-library/react";
import { IApplicationState } from "state/ducks/index";
import "@testing-library/jest-dom/extend-expect";

//@ts-ignore
export const getMockBookData = (): IBook[] => [...bookData.default];

type History = MemoryHistory<{} | null | undefined>;

interface IRouter {
  route?: string;
  history?: History;
}

interface IWrapper {
  children?: ReactNode;
}

const defaultRoute = "/";

// allows test to render with only React Router (not a connected Redux component)
export const renderWithRouter: any = (
  ui: React.ReactElement<any>,
  {
    route = defaultRoute,
    history = createMemoryHistory({ initialEntries: [route] }),
  }: IRouter = {}
) => {
  const Wrapper: FC<IWrapper> = ({ children }: IWrapper) => (
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
  initialState?: Partial<IApplicationState>;
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
  }: IRouter & ReduxInterface = {}
) => {
  const Wrapper: FC<IWrapper> = ({ children }: IWrapper) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );
  return {
    ...render(ui, { wrapper: Wrapper }),
    history,
  };
};
