// import { IMetaAction } from "state/ducks/index";
import { GROUP } from "components/Groups/Groups";
import { IBook } from "state/ducks/book/types";

export interface IGroupState {
  readonly group: GROUP;
}

export type GroupKey = GROUP.YEAR | GROUP.WRITER | GROUP.ARTIST | GROUP.OWNER;

export type GroupedTuple = [string, IBook[]];

export const GroupActionTypes = {
  SET_GROUP: "@@group/SET_GROUP",
};

export interface IDispatchToProps {
  // TODO fix meta action
  setGroup: (group: GROUP) => any;
}
