// import { IMetaAction } from "state/ducks/index";
import { GROUP_OPTIONS } from "components/Groups/Groups";

export interface IGroupState {
  readonly group: GROUP_OPTIONS;
}

export const GroupActionTypes = {
  SET_GROUP: "@@group/SET_GROUP",
};

export interface IDispatchToProps {
  // TODO fix meta action
  setGroup: (group: GROUP_OPTIONS) => any;
}
