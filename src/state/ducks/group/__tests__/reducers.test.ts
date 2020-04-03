import { initialState, groupReducer } from "state/ducks/group/reducers";
import { GROUP } from "components/Groups/Groups";
import { setGroup } from "state/ducks/group/actions";

describe("group reducer", () => {
  it("should return initial state", () => {
    expect(
      groupReducer(initialState, { type: "no type", payload: GROUP.RANDOM })
    ).toEqual(initialState);
  });
  it("should handle setting all groups correctly", () => {
    const groups = Object.keys(GROUP) as GROUP[];
    groups.forEach(group => {
      expect(groupReducer(initialState, setGroup(group as GROUP))).toEqual({
        ...initialState,
        group: group,
      });
    });
  });
});
