import BookDetails, { IProps } from "components/BookDetails/BookDetails";
import React from "react";
import { renderWithRouter, getMockBookData } from "utils/testUtils";

const initialProps: IProps = {
  book: getMockBookData()[0],
};

const renderComponent = (props: IProps) =>
  renderWithRouter(<BookDetails {...props} />);

describe("bookDetails", () => {
  test("bookDetails contains all respective props", () => {
    const { getByTestId, queryByTestId } = renderComponent(initialProps);

    const {
      name,
      year,
      writer,
      artist,
      owner,
      publication,
      summary,
    } = initialProps.book;

    const bookNameElem = getByTestId("bookDetailsName");
    expect(bookNameElem.innerHTML).toContain(name);
    expect(bookNameElem.innerHTML).toContain(year);

    const bookRatingElem = queryByTestId("rating");
    expect(bookRatingElem).toBeInTheDocument();

    const bookWriterElem = getByTestId("bookDetailsWriter");
    expect(bookWriterElem.innerHTML).toContain(writer);

    const bookArtistElem = getByTestId("bookDetailsArtist");
    expect(bookArtistElem.innerHTML).toContain(artist);

    const bookPublicationElem = getByTestId("bookDetailsPublication");
    expect(bookPublicationElem.innerHTML).toContain(publication);

    const bookOwnerElem = getByTestId("bookDetailsOwner");
    expect(bookOwnerElem.innerHTML).toContain(owner);

    const bookSummaryElem = getByTestId("bookDetailsSummary");
    expect(bookSummaryElem.innerHTML).toContain(summary);
  });
});
