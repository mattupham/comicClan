import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "components/Main/Main";
import { IApplicationState } from "state/ducks/index";
import { fetchBooks } from "state/ducks/book/actions";
import { IBookState } from "state/ducks/book/types";

const MainContainer = () => {
  const dispatch = useDispatch();

  const mapStateToProps: IBookState = useSelector(
    ({ bookData }: IApplicationState) => ({
      loading: bookData.loading,
      errors: bookData.errors,
      bookData: bookData.bookData,
    })
  );

  const mapDispatchToProps = {
    fetchBooks: useCallback(() => dispatch(fetchBooks()), [dispatch]),
  };

  return <Main {...mapStateToProps} {...mapDispatchToProps} />;
};

export default MainContainer;
