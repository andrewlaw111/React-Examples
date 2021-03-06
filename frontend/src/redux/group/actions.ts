import { Dispatch } from 'redux';
import axios from 'axios';

export const LOAD_GROUPS = 'LOAD_GROUPS';
export type LOAD_GROUPS = typeof LOAD_GROUPS;

export interface LoadGroupsAction {
  type: LOAD_GROUPS;
  groups: ReactExamples.Group[];
}

export type GroupActions = LoadGroupsAction;

export function loadGroups(groups: ReactExamples.Group[]): LoadGroupsAction {
  return {
    type: LOAD_GROUPS,
    groups: groups
  };
}

export function fetchGroups() {
  return (dispatch: Dispatch<GroupActions>) => {
    axios
      .get<ReactExamples.User[]>(`${process.env.REACT_APP_API_SERVER}/api/groups`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(res => {
        dispatch(loadGroups(res.data));
      });
  };
}