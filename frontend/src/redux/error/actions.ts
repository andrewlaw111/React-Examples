export const ERROR_RESET = 'ERROR_RESET';
export type ERROR_RESET = typeof ERROR_RESET;

export const ERROR_DISPLAY = 'ERROR_DISPLAY';
export type ERROR_DISPLAY = typeof ERROR_DISPLAY;

export interface ErrorResetAction {
  type: ERROR_RESET;
}

export interface ErrorDisplayAction {
  type: ERROR_DISPLAY;  
  error: string;
}

export type ErrorActions = ErrorResetAction | ErrorDisplayAction;