import React, { Component } from 'react';
import './index.css';
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
              path="/forecast"
              component={ForecastPage} />
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;