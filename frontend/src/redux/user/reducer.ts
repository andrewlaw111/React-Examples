import { UserActions, LOAD_USERS } from './actions';

export interface UserState {
  users: ReactExamples.User[];
}

const initialState = {
  users: []
};

export const reducer = (state: UserState = initialState, action: UserActions) => {
  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        users: action.users
      };
    default:
      return initialState;
  }
};