import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import Search from "components/Search/Search";
import { fetchBooks } from "state/ducks/book/actions";

const SearchContainer = () => {
  const dispatch = useDispatch();

  const mapDispatchToProps = {
    fetchBooks: useCallback(() => dispatch(fetchBooks()), [dispatch]),
  };

  return <Search {...mapDispatchToProps} />;
};

export default SearchContainer;
