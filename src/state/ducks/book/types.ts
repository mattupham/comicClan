import { IMetaAction } from "state/ducks/index";
import { GROUP } from "components/Groups/Groups";

export interface IBookState {
  readonly bookData: IBook[];
  readonly loading: boolean;
  readonly errors: [];
}

export type ApiResponse = Record<string, any>;

export interface IBook extends ApiResponse {
  name: string;
  [GROUP.WRITER]: string;
  [GROUP.ARTIST]: string;
  publication: string;
  [GROUP.OWNER]: string;
  rating: number;
  image: string;
  summary: string;
  [GROUP.YEAR]: number;
}
export const BookActionTypes = {
  FETCH_BOOKS: "@@book/FETCH_BOOKS",
  FETCH_BOOKS_SUCCESS: "@@book/FETCH_BOOKS_SUCCESS",
  FETCH_BOOKS_ERROR: "@@book/FETCH_BOOKS_ERROR",
};

export interface IDispatchToProps {
  fetchBooks: (s?: string) => IMetaAction;
}
