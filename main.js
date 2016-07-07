import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import List from './src/components/ListContainer.jsx';
import ButtonApp from './src/components/ButtonApp.jsx';
import Subhead from './src/components/subhead.jsx';
import Home from './src/components/Home.jsx';


const App = () => (
  <MuiThemeProvider>
    <Home/>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('container'));
