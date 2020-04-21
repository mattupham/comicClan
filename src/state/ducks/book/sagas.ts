import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { IMetaAction } from "state/ducks/index";
import apiCaller from "state/utils/apiCaller";
import { fetchBooksError, fetchBooksSuccess } from "state/ducks/book/actions";
import { IBook, BookActionTypes } from "state/ducks/book/types";

function* handleFetch(action: IMetaAction): Generator {
  try {
    const res: IBook[] | any = yield call(apiCaller, action.meta.queryString);
    yield put(fetchBooksSuccess(res));
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchBooksError(err.stack!));
    } else {
      yield put(fetchBooksError("An unknown error occured."));
    }
  }
}

function* watchFetchRequest(): Generator {
  yield takeEvery(BookActionTypes.FETCH_BOOKS, handleFetch);
}

export default function* x() {
  yield all([fork(watchFetchRequest)]);
}
