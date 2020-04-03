import { fetchBooks, fetchBooksSuccess } from "state/ducks/book/actions";
import { initialState, bookReducer } from "state/ducks/book/reducers";
import * as bookData from "state/ducks/book/__tests__/__mockData__/comicBookData.json";

describe("book reducer", () => {
  it("should return initial state", () => {
    expect(bookReducer(initialState, { type: "no type", payload: [] })).toEqual(
      initialState
    );
  });

  it("should handle fetching all books", () => {
    expect(bookReducer(initialState, fetchBooks())).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("should handle all data successfully fetch book", () => {
    expect(bookReducer(initialState, fetchBooksSuccess(bookData))).toEqual({
      ...initialState,
      bookData: bookData,
    });
  });
});
