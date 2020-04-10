import { ReactComponent as SearchIcon } from "assets/searchIcon.svg";
import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { Box } from "rebass";
import styled from "styled-components";
import { IDispatchToProps } from "state/ducks/book/types";

const SearchBox = styled.div`
  display: inline-flex;
  border: 1px solid #ccc;
  overflow: hidden;
  width: 100%;
  border-radius: 0.8rem;
  background: none;
  height: 6rem;
  width: 100%;
`;

const Input = styled.input`
  border: 0;
  flex: 1;
  background: none;
  width: 100%;
  height: 100%;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #5a5a5a;
  }
  &:focus {
    outline: none;
  }
  color: white;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #cccccc;
`;

const StyledSearch: FC<IDispatchToProps> = ({
  fetchBooks,
}: IDispatchToProps) => {
  const [value, setValue] = useState<string>("");

  // TODO Add fetchBooks via Redux here
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    fetchBooks(value);
    setValue("");
    e.preventDefault();
  };

  return (
    <Box mb="2.8rem" data-testid="search">
      <form onSubmit={handleSubmit} data-testid="searchForm">
        <SearchBox>
          <Box ml="1.819rem" mt="1.819rem" mb="1.811rem" mr="1.811rem">
            <SearchIcon data-testid="searchIcon" />
          </Box>
          <Box width="100%">
            <Input
              data-testid="searchInput"
              type="text"
              placeholder="Search by book name"
              value={value}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setValue(e.target.value)
              }
            />
          </Box>
        </SearchBox>
      </form>
    </Box>
  );
};

export default StyledSearch;
