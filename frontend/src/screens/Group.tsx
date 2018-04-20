import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchGroups } from '../redux/group/actions';
// import { SearchBox } from '../components/SearchBox';

interface GroupScreenProps {
  groups: ReactExamples.Group[];
  reloadGroup: () => void;
}

export class PureGroup extends React.Component<GroupScreenProps> {
  componentWillMount() {
    this.props.reloadGroup();
  }

  render() {
    return (
      <div>
        {/* <SearchBox onSearch={this.onFilter}></SearchBox> */}
        
        {this.props.groups.map(group => (
          <ul className="list-group" key={group.id}>
              <li className="list-group-item">{group.name}</li>
          </ul>
        ))}
      </div>
    );
  }
}

export const Group = connect(
  (state: RootState) => ({
    groups: state.group.groups
  }),
  (dispatch) => ({
    reloadGroup: () => dispatch(fetchGroups())
  })
)(PureGroup);