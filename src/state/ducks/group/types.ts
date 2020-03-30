import { IMetaAction } from "state/ducks/index";
import { GROUP_OPTIONS } from "components/GroupOptions/GroupOptions";

interface IMeta {
  queryString: string;
}

export interface IGroupState {
  readonly option: GROUP_OPTIONS;
}

export const GroupActionTypes = {
  CHANGE_GROUP: "@@book/CHANGE_GROUP",
};

export interface IDispatchToProps {
  changeGroup: (group: string) => IMetaAction;
}
