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
    
    event.preventDefault();
    const action = { type: 'SEARCH_WEATHER_API', payload: this.state.search, };
    this.props.dispatch(action);
    console.log(action);
    console.log(this.state.search);
    this.setState({
            search: '',      
    });
    this.props.history.push('/forecast');


  };

  render() {
       const { classes } = this.props;
      return (


<div className={classes.root}>
<Grid container spacing={8} justify={'center'}>
    <Paper alignitems={'center'} className={classes.paper}>
        <form onSubmit={this.apiCall}>
            <Grid item xs>
                <FormControl>
                    <InputLabel htmlFor="apiSearch">
                        Search:</InputLabel>
                        <Input className="input" onChange={this.handleSearch()} value={this.state.search} placeholder='city' />
                </FormControl>
                {/* <Button variant="contained" size="small" color="primary" type="submit">
                    GET FORECAST</Button> */}
            </Grid>
            <Grid item xs style={{ marginTop: 35 }}>
                <Button variant="contained" size="small" color="primary" type="submit">
                    GET FORECAST</Button>
            </Grid>
        </form>
       
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