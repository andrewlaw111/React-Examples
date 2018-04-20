import { Dispatch } from 'redux';
import axios from 'axios';

export const LOAD_USERS = 'LOAD_USERS';
export type LOAD_USERS = typeof LOAD_USERS;

export interface LoadUsersAction {
  type: LOAD_USERS;
  users: ReactExamples.User[];
}

export type UserActions = LoadUsersAction;

export function loadUsers(users: ReactExamples.User[]): LoadUsersAction {
  return {
    type: LOAD_USERS,
    users: users
  };
}

export function fetchUsers() {
  return (dispatch: Dispatch<UserActions>) => {
    axios
      .get<ReactExamples.User[]>(`${process.env.REACT_APP_API_SERVER}/api/users`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(res => {
        dispatch(loadUsers(res.data));
      });
  };
}