import { Action, PayloadAction, TypeConstant } from "typesafe-actions";
import { IBook, IBookState, BookActionTypes } from "state/ducks/book/types";

export const initialState: IBookState = {
  bookData: [],
  errors: [],
  loading: false,
};

export const bookReducer = (
  state: IBookState = initialState,
  action: Action<TypeConstant> & PayloadAction<TypeConstant, IBook[]>
): IBookState => {
  switch (action.type) {
    case BookActionTypes.FETCH_BOOKS: {
      return { ...state, loading: true };
    }
    case BookActionTypes.FETCH_BOOKS_SUCCESS: {
      return { ...initialState, bookData: action.payload };
    }
    case BookActionTypes.FETCH_BOOKS_ERROR: {
      return { ...state };
    }
    default:
      return state;
  }
};
