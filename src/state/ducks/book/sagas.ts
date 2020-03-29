import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { IMetaAction } from "state/ducks/index";
import apiCaller from "state/utils/apiCaller";
import { fetchBooksError, fetchBooksSuccess } from "state/ducks/book/actions";
import { IBookRaw, BookActionTypes } from "state/ducks/book/types";

/**
 * @desc Business logic of effect.
 */
function* handleFetch(action: IMetaAction): Generator {
  try {
    const res: IBookRaw[] | any = yield call(
      apiCaller,
      action.meta.queryString
    );
    yield put(fetchBooksSuccess(res));
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchBooksError(err.stack!));
    } else {
      yield put(fetchBooksError("An unknown error occured."));
    }
  }
}

/**
 * @desc Watches every specified action and runs effect method and passes action args to it
 */
function* watchFetchRequest(): Generator {
  yield takeEvery(BookActionTypes.FETCH_BOOKS, handleFetch);
}

/**
 * @desc saga init, forks in effects, other sagas
 */
export default function* x() {
  yield all([fork(watchFetchRequest)]);
}
