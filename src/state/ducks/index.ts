import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import {
  Action,
  MetaAction,
  PayloadAction,
  TypeConstant,
} from "typesafe-actions";
import { bookReducer } from "state/ducks/book/reducers";
import bookSaga from "state/ducks/book/sagas";
import { IBookState } from "state/ducks/book/types";

export interface IApplicationState {
  bookData: IBookState;
}

export interface IMetaAction extends MetaAction<TypeConstant, IMeta> {}

export interface IReducerAction<TPayload>
  extends Action<TypeConstant>,
    PayloadAction<TypeConstant, TPayload> {}

export const rootReducer = combineReducers<IApplicationState>({
  bookData: bookReducer,
});

export function* rootSaga() {
  yield all([fork(bookSaga)]);
}

interface IMeta {
  queryString: string;
}
