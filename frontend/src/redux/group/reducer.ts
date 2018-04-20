import { GroupActions, LOAD_GROUPS } from './actions';

export interface GroupState {
  groups: ReactExamples.Group[];
}

const initialState = {
  groups: []
};

export const reducer = (state: GroupState = initialState, action: GroupActions) => {
  switch (action.type) {
    case LOAD_GROUPS:
      return {
        ...state,
        groups: action.groups
      };
    default:
      return initialState;
  }
};