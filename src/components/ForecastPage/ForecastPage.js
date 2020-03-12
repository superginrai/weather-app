import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import swal from 'sweetalert';
import NavigationIcon from '@material-ui/icons/Navigation';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ResultWeather from '../ResultWeather/ResultWeather'
import ResultForecast from '../ResultForecast/ResultForecast'

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
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
});


const mapReduxStateToProps = state => ({
    searchResults: state.searchResults.searchResults,
});

class ForecastPage extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
        search: '',
        testResults: '',
    };
}
  
  //Updates the value of this.state.search in real time as the user inputs the "Search" field 
  handleSearch = () => event => {
    this.setState({
        ...this.state.search,
        search: event.target.value,
    });
  }

  //Sends the current value of this.state.search to redux to make a call to WeatherAPI.com
  apiCall = event => {
    event.preventDefault();
    const action = { type: 'SEARCH_WEATHER_API', payload: this.state.search, };
    this.props.dispatch(action);
    console.log(action);
    console.log(this.state.search);
    this.setState({   
        search: '',        
    });
  };

  runTest = () => event => {
    axios.post(`https://api.ghostinspector.com/v1/tests/5e69545d9fb56f1f305725be/execute/?apiKey=520aa85b0125ef82561ae27592d568bba676063c`)
      .then(function (response) {
        swal({
            title: `Test Passed: ${JSON.stringify(response.data.data.passing)}`,
            text:  "Complete test results logged.",
            icon: "info",
          });
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log('ghost in the machine');
  };  

  render() {
       const { classes } = this.props;
      return (
        <div className={classes.root}>

            <Fab
                onClick={this.runTest()}
                variant="extended"
                size="small"
                color="primary"
                aria-label="run test"
                className={classes.margin}
                >
                <NavigationIcon className={classes.extendedIcon} />
                Run Test{this.state.testResults}
            </Fab>
            <Grid container spacing={3} justify={'center'}>
                <Paper alignitems={'center'} className={classes.paper}>
                    <form onSubmit={this.apiCall}>
                        <Grid item xs>
                            <FormControl>
                                <InputLabel htmlFor="apiSearch">
                                    Search:</InputLabel>
                                    <Input className="input" onChange={this.handleSearch()} value={this.state.search} placeholder='city or zip' />
                            </FormControl>
                        </Grid>
                        <Grid item xs style={{ marginTop: 35 }}>
                            <Button variant="contained" size="small" color="primary" type="submit">
                                GET FORECAST</Button>
                        </Grid>
                    </form>
                    </Paper>
            </Grid>
                {/* <Paper alignitems={'center'} className={classes.paper}> */}
                    <Grid container spacing={3} alignitems={'center'} justify={'center'} className={classes.paper}>     
                        <Grid container item xs={12} sm={3}>
                            <ul>
                                {this.props.searchResults.map(result =>
                                    <ResultWeather key={result.id} result={result} day={0}/>)}
                            </ul>
                        </Grid>
                        <Grid container item xs={12} sm={3}>
                            <ul>
                                {this.props.searchResults.map(result =>
                                    <ResultForecast key={result.id} result={result} day={1}/>)}
                            </ul>
                        </Grid>
                        <Grid container item xs={12} sm={3}>
                            <ul>
                                {this.props.searchResults.map(result =>
                                    <ResultForecast key={result.id} result={result} day={2}/>)}
                            </ul>
                        </Grid>
                        <Grid container item xs={12} sm={3}>
                            <ul>
                                {this.props.searchResults.map(result =>
                                    <ResultForecast key={result.id} result={result} day={3}/>)}
                            </ul>
                        </Grid>
                    </Grid>
                {/* </Paper> */}
           {/* </Grid> */}
        </div>
        );
    }
}

ForecastPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapReduxStateToProps)(withStyles(styles)(ForecastPage));