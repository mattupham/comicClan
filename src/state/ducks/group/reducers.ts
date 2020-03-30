import { Action, PayloadAction, TypeConstant } from "typesafe-actions";
import { IGroupState, GroupActionTypes } from "state/ducks/group/types";
import { GROUP_OPTIONS } from "components/GroupOptions/GroupOptions";

export const initialState: IGroupState = {
  option: GROUP_OPTIONS.YEAR,
};

export const groupReducer = (
  state: IGroupState = initialState,
  action: Action<TypeConstant> & PayloadAction<TypeConstant, GROUP_OPTIONS>
): IGroupState => {
  switch (action.type) {
    case GroupActionTypes.CHANGE_GROUP: {
      return { ...state, option: action.payload };
    }
    default:
      return state;
  }
};
