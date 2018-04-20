import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchUsers } from '../redux/user/actions';
// import { SearchBox } from '../components/SearchBox';

interface UserScreenProps {
  users: ReactExamples.User[];
  reloadUser: () => void;
}

export class PureUser extends React.Component<UserScreenProps> {
  componentWillMount() {
    this.props.reloadUser();
  }

  render() {
    return (
      <div>
        {/* <SearchBox onSearch={this.onFilter}></SearchBox> */}
        
        {this.props.users.map(user => (
          <ul className="list-group" key={user.id}>
              <li className="list-group-item">{user.name} - {user.email}</li>
          </ul>
        ))}
      </div>
    );
  }
}

export const User = connect(
  (state: RootState) => ({
    users: state.user.users
  }),
  (dispatch) => ({
    reloadUser: () => dispatch(fetchUsers())
  })
)(PureUser);