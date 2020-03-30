import { action } from "typesafe-actions";
import { Book, BookActionTypes } from "state/ducks/book/types";

export const fetchBooks = (s: string | undefined = "") => {
  console.log("S IN FETCH BOOKS: ", s);
  return action(BookActionTypes.FETCH_BOOKS, [], {
    // TODO add query string
    queryString: s,
  });
};

export const fetchBooksSuccess = (data: Book[]) =>
  action(BookActionTypes.FETCH_BOOKS_SUCCESS, data);

export const fetchBooksError = (message: string) =>
  action(BookActionTypes.FETCH_BOOKS_ERROR, message);
