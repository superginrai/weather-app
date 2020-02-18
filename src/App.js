import React, { Component } from 'react';
import './index.css';
import SearchPage from './components/SearchPage/SearchPage';
import ForecastPage from './components/ForecastPage/ForecastPage';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Redirect exact from="/" to="/forecast" />
            <Route
              path="/search"
              component={SearchPage} />
            <Route
              path="/forecast"
              component={ForecastPage} />
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;