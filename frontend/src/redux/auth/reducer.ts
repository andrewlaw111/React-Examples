import { LoginActions } from './actions';

export interface AuthState {
  isAuthenticated: boolean;
}

export function authReducer(state: AuthState, action: LoginActions) {
  return state;
}
