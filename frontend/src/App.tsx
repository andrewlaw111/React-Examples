import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Login } from './screens/Login';
import { User } from './screens/User';
import { Group } from './screens/Group';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div style={{textAlign: 'center'}}>
            <h1>
              React Examples
            </h1>
          </div>
          <ul className="nav nav-tabs">
            <li role="presentation">
              <Link to="/users">Users</Link>
            </li>
            <li role="presentation">
              <Link to="/groups">Groups</Link>
            </li>
          </ul>
          <Route component={Login} />
          <Route path="/users" component={User} />
          <Route path="/groups" component={Group} />
        </div>
      </Router>
    );
  }
}

export default App;
