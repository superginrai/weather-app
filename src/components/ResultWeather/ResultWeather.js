import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';


const styles = theme => ({
    card: {
        maxWidth: 400,
        marginBottom: 50,
    },
    media: {
        height: 530,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

const mapStateToProps = state => ({

});


//Builds and renders a MaterialUI card of current weather conditions for display on the DOM
class WeatherCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            weather: {
                location: this.props.result.data.location.name,
                region: this.props.result.data.location.region,
                temp: this.props.result.data.current.temp_f,
                condition: this.props.result.data.current.condition.text,
                icon: this.props.result.data.current.condition.icon,
                minTemp: this.props.result.data.forecast.forecastday[this.props.day].day.mintemp_f,
                maxTemp: this.props.result.data.forecast.forecastday[this.props.day].day.maxtemp_f,
                precip: this.props.result.data.forecast.forecastday[this.props.day].day.totalprecip_in, 
            }
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {this.state.weather.location}, {this.state.weather.region}
                        </Typography>
                        <img src={this.state.weather.icon} alt="condition icon"></img>
                        <Typography gutterBottom variant="headline" component="h4">
                            {this.state.weather.condition}
                        </Typography>
                        <Typography gutterBottom variant="headline" component="h1">
                            {this.state.weather.temp}&#176;
                        </Typography>
                        <Typography gutterBottom variant="headline" component="h4">
                            High: {this.state.weather.maxTemp}&#176;
                            Low: {this.state.weather.minTemp}&#176;
                        </Typography>
                    </CardContent>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                            <Typography gutterBottom variant="headline" component="h4">
                                Precipitation: {this.state.weather.precip} in.
                            </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                </Card>
            </div>
        );
    }
}

WeatherCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(WeatherCard));