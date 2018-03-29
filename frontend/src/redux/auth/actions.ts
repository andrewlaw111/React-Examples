import { Dispatch } from 'redux';
import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export type LOGIN_SUCCESS = typeof LOGIN_SUCCESS;

export interface LoginSuccessAction {
  type: LOGIN_SUCCESS;
}

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export type LOGIN_FAILURE = typeof LOGIN_FAILURE;

export interface LoginFailureAction {
  type: LOGIN_FAILURE;
  message: string;
}

export type LoginActions = LoginSuccessAction | LoginFailureAction;

function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  };
}

function loginFailure(message: string) {
  return {
    type: LOGIN_FAILURE,
    message: message
  };
}

export function loginUser(username: string, password: string) {
  return (dispatch: Dispatch<LoginActions>) => {
    return axios
      .post<{ token: string; message?: string }>(
        'http://localhost:3001/api/login',
        {
          username: username,
          password: password
        }
      )
      .then(response => {
        if (response.data == null) {
          dispatch(loginFailure('Unknown Error'));
        } else if (!response.data.token) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(loginFailure(response.data.message || ''));
        } else {
          // If login was successful, set the token in local storage
          localStorage.setItem('token', response.data.token);
          // Dispatch the success action
          dispatch(loginSuccess());
        }
      });
      // .catch(err => console.log('Error: ', err));
  };
}
