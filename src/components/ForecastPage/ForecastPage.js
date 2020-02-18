import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ResultWeather from '../ResultWeather/ResultWeather'
import ResultForecast from '../ResultForecast/ResultForecast'
//import './App.css';

const styles = theme => ({
  root: {
      flexGrow: 1,
      justify: 'center',
      alignItems: 'center',
  },
  paper: {
      justify: 'center',
      alignItems: 'center',
      padding: theme.spacing(3),
      textAlign: 'center',
      marginTop: '50px',
      color: theme.palette.text.secondary,
  },
});

const mapReduxStateToProps = state => ({
    searchResults: state.searchResults.searchResults,
});

// const mapReduxStateToProps = (reduxState) => (
//     { reduxState }
// );

class ForecastPage extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
        search: '',
    };
}

  handleSearch = () => event => {
    this.setState({
        ...this.state.search,
        search: event.target.value,
    });
  }


  apiCall = event => {
    
    // let apiKey = '696e9369164547f080e155915201402';

    // axios({
    //     url: `http://api.weatherapi.com/v1/current.json?key=696e9369164547f080e155915201402&q=${this.state.search}`,
    //     method: 'GET',
    // })
    //     .then(response => {
    //         let weather = response.data.current.temp_f;
    //         console.log(response.data);
    //         console.log(weather);
    //         this.setState({
    //             tempF: weather,
    //         });
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     });

    event.preventDefault();
    const action = { type: 'SEARCH_WEATHER_API', payload: this.state.search, };
    this.props.dispatch(action);
    console.log(action);
    console.log(this.state.search);
    this.setState({
   
            search: '',
        
    });

        // const action = { type: 'SEARCH_WEATHER_API', payload: this.state.search }
        // this.props.dispatch(action);
        // console.log(this.props.reduxState.weather);
        // console.log(this.state.search);
        // this.setState({
        //     search: '',    
        //});

  };

  render() {
       const { classes } = this.props;
      return (
          // <div>
          //     <button onClick={this.apiCall}>Go for temp! </button>
          //     The temperature in <input className="input" onChange={this.handleSearch()} value={this.state.search} placeholder='location' /> is {this.state.tempF} degrees F right now!

              

          // </div>

<div className={classes.root}>
<Grid container spacing={3} justify={'center'}>
    <Paper alignitems={'center'} className={classes.paper}>
    {/* <Grid container spacing={3} alignitems={'center'}>      */}
        <form onSubmit={this.apiCall}>
            <Grid item xs>
                <FormControl>
                    <InputLabel htmlFor="apiSearch">
                        Search:</InputLabel>
                        <Input className="input" onChange={this.handleSearch()} value={this.state.search} placeholder='city' />
                </FormControl>
            </Grid>
            <Grid item xs style={{ marginTop: 35 }}>
                <Button variant="contained" size="small" color="primary" type="submit">
                    GET FORECAST</Button>
            </Grid>
        </form>

        {/* The temperature is {this.props.searchResultsmap(result =>
                             <li> key={result.id} result={result}/>)} degrees F right now!  */}
           {/* <ul> { this.props.searchResults.map (item => <li key={item.id}>{item.data.current.temp_f} tacos</li>) }</ul> */}
           {/* <ul>{this.props.searchResults.searchResults.data.current.temp_f}</ul> */}

        <Grid container spacing={3} alignitems={'center'}>       
            <Grid item xs={12}>
                    <ul>
                        {this.props.searchResults.map(result =>
                            <ResultWeather key={result.id} result={result} day={0}/>)}
                    </ul>
            </Grid>

                <Grid item xs={3}>
                    <ul>
                        {this.props.searchResults.map(result =>
                            <ResultForecast key={result.id} result={result} day={1}/>)}
                    </ul>
                </Grid>
                <Grid item xs={3}>
                    <ul>
                        {this.props.searchResults.map(result =>
                            <ResultForecast key={result.id} result={result} day={2}/>)}
                    </ul>
                </Grid>
                <Grid item xs={3}>
                    <ul>
                        {this.props.searchResults.map(result =>
                            <ResultForecast key={result.id} result={result} day={3}/>)}
                    </ul>
                </Grid>
            </Grid>
        {/* </Grid> */}
    </Paper>
</Grid>
</div>
      );

  }
}

ForecastPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapReduxStateToProps)(withStyles(styles)(ForecastPage));