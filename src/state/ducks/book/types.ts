import { IMetaAction } from "state/ducks/index";
import { BookData } from "components/App/App";
import { GROUP_OPTIONS } from "components/GroupOptions/GroupOptions";

export interface IBookState {
  readonly data: BookData[];
  readonly loading: boolean;
  readonly errors: [];
}
export type ApiResponse = Record<string, any>;

export interface IBookRaw extends ApiResponse {
  name: string;
  [GROUP_OPTIONS.WRITER]: string;
  [GROUP_OPTIONS.ARTIST]: string;
  publication: string;
  [GROUP_OPTIONS.OWNER]: string;
  rating: number;
  image: string;
  summary: string;
  [GROUP_OPTIONS.YEAR]: number;
}
export const BookActionTypes = {
  FETCH_BOOKS: "@@book/FETCH_BOOKS",
  FETCH_BOOKS_SUCCESS: "@@book/FETCH_BOOKS_SUCCESS",
  FETCH_BOOKS_ERROR: "@@book/FETCH_BOOKS_ERROR",
};

export interface IDispatchToProps {
  getBooks: () => IMetaAction;
}
