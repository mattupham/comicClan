import { action } from "typesafe-actions";
import { GroupActionTypes } from "state/ducks/group/types";
import { GROUP_OPTIONS } from "components/Groups/Groups";

export const setGroup = (group: GROUP_OPTIONS) =>
  action(GroupActionTypes.SET_GROUP, group);
