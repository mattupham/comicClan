import { action } from "typesafe-actions";
import { setGroup } from "state/ducks/group/actions";
import { GroupActionTypes } from "state/ducks/group/types";
import { GROUP } from "components/Groups/Groups";

describe("group actions", () => {
  it("should create an action to set a group", () => {
    const groups = Object.keys(GROUP) as GROUP[];
    groups.forEach(group => {
      const expectedAction = action(GroupActionTypes.SET_GROUP, group);
      expect(setGroup(group as GROUP)).toEqual(expectedAction);
    });
  });
});
