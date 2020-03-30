import { action } from "typesafe-actions";
import { GroupActionTypes } from "state/ducks/group/types";
import { GROUP_OPTIONS } from "components/GroupOptions/GroupOptions";

export const changeGroup = (group: GROUP_OPTIONS) =>
  action(GroupActionTypes.CHANGE_GROUP, group);
