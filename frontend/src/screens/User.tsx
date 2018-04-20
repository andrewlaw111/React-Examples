import * as React from 'react';
import { connect } from 'react-redux';

export class PureUser extends React.Component {
  render() {
    return (
      <div />
    );
  }
}

export const User = connect()(PureUser);