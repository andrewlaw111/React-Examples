import { ErrorActions, ERROR_RESET, ERROR_DISPLAY } from './actions';

export const reducer = (state: string | null = null, action: ErrorActions) => {
  if (action.type === ERROR_RESET) {
    return null;
  } else if (action.type === ERROR_DISPLAY) {
    return action.error;
  }

  return state;
};
