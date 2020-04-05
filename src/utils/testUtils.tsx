import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

interface RouterInterface {
  route?: string;
  history?: any;
}

const defaultRoute = "/";

export const renderWithRouter: any = (
  ui: React.ReactElement<any>,
  {
    route = defaultRoute,
    history = createMemoryHistory({ initialEntries: [defaultRoute] }),
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
