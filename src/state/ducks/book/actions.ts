import { action } from "typesafe-actions";
import { IBook, BookActionTypes } from "state/ducks/book/types";

export const fetchBooks = (s: string | undefined = "") => {
  return action(BookActionTypes.FETCH_BOOKS, [], {
    // TODO add query string
    queryString: s,
  });
};

export const fetchBooksSuccess = (data: IBook[]) =>
  action(BookActionTypes.FETCH_BOOKS_SUCCESS, data);

export const fetchBooksError = (message: string) =>
  action(BookActionTypes.FETCH_BOOKS_ERROR, message);
