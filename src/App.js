import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import DeveloperPage from './pages/developer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/react_Mytaste" component={Home} exact />
        <Route path="/developer" component={DeveloperPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
