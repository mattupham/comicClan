import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import apiCaller from "state/utils/apiCaller";
import { fetchBooks, fetchBooksSuccess } from "state/ducks/book/actions";
import bookSaga from "state/ducks/book/sagas";
import * as bookData from "state/ducks/book/__tests__/__mockData__/comicBookData.json";

describe("book saga", () => {
  it("should handle successfully fetching books", () => {
    return (
      expectSaga(bookSaga)
        .provide([[matchers.call.fn(apiCaller), bookData]])
        // Assert that the 'put' will happen in the future
        .put(fetchBooksSuccess(bookData))
        // Dispatch actions that saga will take
        .dispatch(fetchBooks())
        // Start test (return promise)
        .silentRun()
    );
  });
});
