import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RouterOutlet } from './RouterOutlet';
import { Provider } from 'react-redux';
import { store } from './redux/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <RouterOutlet />
        </Router>
      </Provider>
    );
  }
}

export default App;
