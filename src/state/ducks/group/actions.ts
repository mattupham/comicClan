import { action } from "typesafe-actions";
import { GroupActionTypes } from "state/ducks/group/types";
import { GROUP } from "components/Groups/Groups";

export const setGroup = (group: GROUP) =>
  action(GroupActionTypes.SET_GROUP, group);
