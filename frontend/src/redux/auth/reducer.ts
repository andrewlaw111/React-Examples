import { LoginActions, LOGIN_SUCCESS } from './actions';

export interface AuthState {
  isAuthenticated: boolean;
}

const initialState = {
  isAuthenticated: false
};

export function authReducer(state: AuthState = initialState, action: LoginActions) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true
      };
    default:
      return state;
  }
}
