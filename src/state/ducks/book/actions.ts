import { action } from "typesafe-actions";
import { IBookRaw, BookActionTypes } from "state/ducks/book/types";

export const fetchBooks = () =>
  action(BookActionTypes.FETCH_BOOKS, [], {
    // TODO add query string
    queryString: "",
  });

export const fetchBooksSuccess = (data: IBookRaw[]) =>
  action(BookActionTypes.FETCH_BOOKS_SUCCESS, data);

export const fetchBooksError = (message: string) =>
  action(BookActionTypes.FETCH_BOOKS_ERROR, message);
