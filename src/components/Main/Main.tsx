import { BookData } from "components/App/App";
import ComicBookList from "components/ComicBookList/ComicBookList";
import GroupOptions, {
  GROUP_OPTIONS
} from "components/GroupOptions/GroupOptions";
import Search from "components/Search/Search";
import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";

const Main = styled.main`
  background: #333333;
  height: 100%;
  padding-right: 2.8rem;
  padding-left: 2.8rem;
  padding-top: 2.8rem;
`;

const HR = styled.hr`
  border: 1px solid #535353;
  width: 100%;
`;

interface IProps {
  bookData: BookData[];
}

const books: BookData[] = [
  {
    name: "The True Story of Captain Girl #620",
    writer: "Analiese Mandy",
    artist: "Lola Gerrilee",
    publication: "Convincing Co.",
    owner: "Grayasp",
    rating: 4,
    image: "https://comicclan.vett.io/images/image-placeholder2.svg",
    summary:
      "Eiusmod ad sit veniam sunt minim consectetur commodo ut incididunt nostrud qui incididunt nulla excepteur cillum. Id commodo voluptate commodo nulla et cillum id officia fugiat ut sunt in anim aute dolore nostrud elit. Proident veniam aliquip labore occaecat esse nulla enim ut enim officia laborum dolor ipsum ex exercitation nulla. Velit minim et elit fugiat dolore ipsum culpa sit laboris. Officia ipsum veniam do sint quis in magna eu. Voluptate pariatur ullamco reprehenderit irure sint sint irure do veniam pariatur in est voluptate ullamco ullamco.↵Fugiat aliquip non nisi dolore deserunt id dolore. Officia velit cillum consequat do adipisicing id cupidatat nostrud elit velit ad ipsum adipisicing ea nisi. Magna id elit aliquip tempor enim deserunt sit elit sit deserunt sunt reprehenderit nisi aute ea sunt laboris sint. Sunt duis anim sit in ipsum aliquip enim labore enim sint commodo do et do sit est est sit ipsum. Et mollit esse velit irure aliquip id dolore duis aliquip labore aliqua.",
    year: 2013
  },
  {
    name: "The Amazing Space Woman #101",
    writer: "Holly-anne Gretta",
    artist: "Zola Ilsa",
    publication: "Green Co.",
    owner: "Jadejunglefowl",
    rating: 4,
    image: "https://comicclan.vett.io/images/image-placeholder2.svg",
    summary:
      "Consectetur consectetur irure eiusmod ipsum labore labore elit aliquip id magna id voluptate qui dolore pariatur aliquip. Culpa incididunt sint reprehenderit qui cillum nostrud quis officia nulla id in aliquip consectetur incididunt nostrud id. Quis esse nulla cillum Lorem excepteur. Est fugiat reprehenderit consectetur nostrud ipsum velit veniam. Mollit incididunt sit pariatur exercitation commodo deserunt officia velit dolore fugiat duis nisi elit excepteur exercitation excepteur. Minim mollit elit aliquip consectetur duis duis elit aute ullamco.↵Sit sunt ea quis non velit anim officia proident et minim exercitation esse ipsum consequat. Sunt voluptate velit est in est elit voluptate cillum enim qui adipisicing cupidatat. Commodo anim Lorem aliquip aliqua ut id amet reprehenderit cupidatat duis minim. Cillum quis cillum ut laboris adipisicing commodo dolor duis est eiusmod non fugiat culpa ex quis labore. Nulla proident proident esse cupidatat irure officia dolor ea ea.",
    year: 1968
  },
  {
    name: "The True Story of Ultra Thing #152",
    writer: "Roanna Rahal",
    artist: "Devon Marla",
    publication: "Purple Inc.",
    owner: "Coffeeguineafowl",
    rating: 4,
    image: "https://comicclan.vett.io/images/image-placeholder5.svg",
    summary:
      "Ullamco proident excepteur commodo pariatur aliqua culpa. Labore dolore ad minim id anim ullamco ex ipsum in nulla est non enim non. Laboris magna in nostrud ullamco aliqua est nulla do velit culpa. Quis eu fugiat ea consectetur culpa. Qui nisi sit nostrud tempor sint officia sint. Ea magna fugiat cillum aute voluptate reprehenderit qui esse consequat labore pariatur aliqua aliqua mollit.↵Et eu irure dolor consequat sit esse commodo esse nisi esse consectetur. Ullamco qui proident culpa magna deserunt elit labore mollit fugiat laborum mollit qui duis. Aliqua eiusmod culpa aliqua incididunt deserunt minim. Cupidatat do duis ut irure incididunt anim irure. Minim culpa enim aute minim laboris fugiat anim culpa et deserunt aliquip anim commodo. Enim aliqua sit culpa cupidatat proident tempor dolore laborum aliqua officia consequat ex excepteur officia.",
    year: 1995
  }
];

const groupBy = (arr: BookData[], groupOption: GROUP_OPTIONS) => {
  // if random, sort randomly
  const key = groupOption.toLowerCase() as keyof BookData;
  const groups = arr.reduce((acc, curVal) => {
    acc[curVal[key]] = acc[curVal[key]] || [];
    acc[curVal[key]].push(curVal);
    return acc;
  }, Object.create(null));
  // console.log("GROUPS: ", Object.entries(groups));
  return Object.entries(groups);
  // [
  //   [
  //     2007,
  //     [{},{},{}]
  //   ],
  //   [
  //     2002,
  //     [{},{},{}]
  //   ]
  // ]
};

const sortBy = (groupedData: any, groupOption: GROUP_OPTIONS) => {
  if (groupOption === GROUP_OPTIONS.YEAR) {
    return groupedData.sort((a: any, b: any) => +b[0] - +a[0]);
  }
  // year
  // alphabetical
  // random
};

const StyledMain: FC<IProps> = (props: IProps) => {
  const [currentGroupOption, setCurrentGroupOption] = useState<GROUP_OPTIONS>(
    GROUP_OPTIONS.YEAR
  );

  const [sortedGroupData, setSortedGroupData] = useState<any>([]);

  useEffect(() => {
    const groupedData = groupBy(props.bookData, currentGroupOption);
    const sortedData = sortBy(groupedData, currentGroupOption);
    console.log("SORTED DATA: ", sortedData);
    setSortedGroupData(sortedData);
  }, [currentGroupOption, props.bookData]);

  return (
    <Main className="main">
      <Search />
      <GroupOptions
        handleSetCurrentGroup={setCurrentGroupOption}
        currentGroup={currentGroupOption}
      />
      {sortedGroupData.map(([groupValue, data]: any) => (
        <ComicBookList groupValue={groupValue} bookData={data} />
      ))}
      {/* <ComicBookList bookData={props.bookData} /> */}
      <HR />
      {/* <ComicBookList /> */}
      <HR />
    </Main>
  );
};

export default StyledMain;
