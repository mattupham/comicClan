import { IBook } from "state/ducks/book/types";
import BookList from "components/BookList/BookList";
import {
  GROUP_OPTIONS as GROUP,
  GROUP_OPTIONS,
} from "components/Groups/Groups";
import GroupsContainer from "containers/GroupsContainer";
import Search from "components/Search/Search";
import React, { FC, useEffect, useState } from "react";
import { Box } from "rebass";
import styled from "styled-components";
import { groupBy, sortBy } from "utils/utils";
import BookPage from "components/BookPage/BookPage";
import { Route, Switch, useParams, Redirect } from "react-router-dom";
import { IDispatchToProps } from "state/ducks/book/types";
import queryString from "query-string";

export type GroupKey = GROUP.YEAR | GROUP.WRITER | GROUP.ARTIST | GROUP.OWNER;

export type GroupedTuple = [string, IBook[]];

const Main = styled.main`
  background: #333333;
  height: 100%;
  padding-right: 2.8rem;
  padding-left: 2.8rem;
  padding-top: 2.8rem;
  height: 100vh;
`;

export const HR = styled.hr`
  border: 1px solid #535353;
  width: 100%;
  margin: 0;
`;

export const groupAndSortBy = (
  book: IBook[],
  groupOption: GROUP
): GroupedTuple[] => {
  let groupedData = groupBy(book, groupOption);
  let sortedData = sortBy(groupedData, groupOption);
  return sortedData;
};

interface IProps {
  bookData: IBook[];
}

type AllProps = IProps & IDispatchToProps;

const StyledMain: FC<AllProps> = ({ bookData, fetchBooks }: AllProps) => {
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  // const params = new URLSearchParams(props.location.search);
  // const groupFromUrl = params.get("group");
  // console.log("PARAMS: ", params);
  // console.log("PARAMS: ", params);

  // let { group } = useParams();
  // console.log("LOCATION: ", location);
  // const params = new URLSearchParams(location.search);
  // console.log("PARAMS: ", params);
  // const groupFromUrl = params.get("group");

  return (
    <Main className="main">
      <Switch>
        <Route exact path="/">
          <Redirect to="/books/year" />
        </Route>
        <Route
          exact
          path="/books/:group"
          children={({ match }) => (
            <>
              {/* {console.log("MATCH: ", match)}
              {console.log("MATCHED: ", match.params.group)} */}
              <Search fetchBooks={s => fetchBooks(s)} />
              <GroupsContainer />
              {/* @ts-ignore */}
              {groupAndSortBy(
                bookData,
                // @ts-ignore
                match.params.group
              ).map(([groupValue, data]: any, index: number) => (
                <Box key={index}>
                  <BookList
                    groupValue={groupValue}
                    books={data}
                    // currentGroup={currentGroupOption}
                    currentGroup={GROUP_OPTIONS.YEAR}
                  />
                  <HR />
                </Box>
              ))}
            </>
          )}
        />
      </Switch>
    </Main>
  );
};

// console.log("GROUP: ", group);
//   return (
//     <Main className="main">
//       <Switch>
//         <Redirect exact from="/" to="/group" />

//         <Route
//           path="/group"
//           children={({ location }) => (
//             <>
//               {console.log("LOCATION: ", location)}
//               {console.log(
//                 "PARSED: ",
//                 queryString.parse(location.search).group
//               )}
//               <Search fetchBooks={s => fetchBooks(s)} />
//               <GroupsContainer />
//               {/* @ts-ignore */}
//               {groupAndSortBy(
//                 bookData,
//                 // @ts-ignore
//                 queryString.parse(location.search).group
//               ).map(([groupValue, data]: any, index: number) => (
//                 <Box key={index}>
//                   <BookList
//                     groupValue={groupValue}
//                     books={data}
//                     // currentGroup={currentGroupOption}
//                     currentGroup={GROUP_OPTIONS.YEAR}
//                   />
//                   <HR />
//                 </Box>
//               ))}
//             </>
//           )}
//         />
//       </Switch>

//       {bookData.length !== 0 && (
//         <Switch>
//           <Route
//             path="/:title"
//             children={
//               <BookPageRoute books={bookData} selectedBook={bookData[0]} />
//             }
//           />
//         </Switch>
//       )}
//     </Main>
//   );
// };

// const BookPageRoute = (props: { books: IBook[]; selectedBook: IBook }) => {
//   let { title } = useParams();
//   if (title === undefined) {
//     return null;
//   } else {
//     return (
//       <BookPage
//         books={props.books}
//         //@ts-ignore
//         selectedBook={
//           props.books.filter(
//             //@ts-ignore
//             book => book.name === decodeURIComponent(title)
//           )[0]
//         }
//       />
//     );
//   }
// };

export default StyledMain;
