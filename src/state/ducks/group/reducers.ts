import { Action, PayloadAction, TypeConstant } from "typesafe-actions";
import { IGroupState, GroupActionTypes } from "state/ducks/group/types";
import { GROUP_OPTIONS } from "components/Groups/Groups";

export const initialState: IGroupState = {
  group: GROUP_OPTIONS.YEAR,
};

export const groupReducer = (
  state: IGroupState = initialState,
  action: Action<TypeConstant> & PayloadAction<TypeConstant, GROUP_OPTIONS>
): IGroupState => {
  switch (action.type) {
    case GroupActionTypes.SET_GROUP: {
      return { ...state, group: action.payload };
    }
    default:
      return state;
  }
};
