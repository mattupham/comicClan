import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Groups, { GROUP_OPTIONS } from "components/Groups/Groups";
import { IApplicationState } from "state/ducks/index";
import { setGroup } from "state/ducks/group/actions";
import { IGroupState } from "state/ducks/group/types";

const GroupsContainer = () => {
  const dispatch = useDispatch();

  const mapStateToProps: IGroupState = useSelector(
    (state: IApplicationState) => state.group
  );

  const mapDispatchToProps = {
    setGroup: useCallback((group: GROUP_OPTIONS) => dispatch(setGroup(group)), [
      dispatch,
    ]),
  };

  return <Groups {...mapStateToProps} {...mapDispatchToProps} />;
};

export default GroupsContainer;
