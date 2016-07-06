import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import List from './src/components/ListContainer.jsx';
import ButtonApp from './src/components/ButtonApp.jsx';

const App = () => (
  <MuiThemeProvider>
    <List />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('container'));
