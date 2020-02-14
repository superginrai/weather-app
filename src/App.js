import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class ApiDemo extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
        tempF: [],
        search: '',
    };
}

  handleSearch = () => event => {
    this.setState({
        ...this.state.search,
        search: event.target.value,
    });
  }


  apiCall = () => {
    
    let apiKey = '696e9369164547f080e155915201402';

    axios({
        url: `http://api.weatherapi.com/v1/current.json?key=696e9369164547f080e155915201402&q=${this.state.search}`,
        method: 'GET',
    })
        .then(response => {
            let weather = response.data.current.temp_f;
            console.log(response.data);
            console.log(weather);
            this.setState({
                tempF: weather,
            });
        })
        .catch(err => {
            console.error(err);
        });
  };

  render() {
      // const { classes } = this.props;
      return (
          <div>
              <button onClick={this.apiCall}>Go for temp! </button>
              The temperature in <input className="input" onChange={this.handleSearch()} value={this.state.search} placeholder='location' /> is {this.state.tempF} degrees F right now!

              

          </div>
      );

  }
}

export default ApiDemo;