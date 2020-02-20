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
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
});

const mapStateToProps = state => ({
});

//Builds and renders a MaterialUI card of a forecast day for display on the DOM
class ForecastCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            weather: {
                date: (this.props.result.data.forecast.forecastday[this.props.day].date).slice(5),
                icon: this.props.result.data.forecast.forecastday[this.props.day].day.condition.icon,
                minTemp: this.props.result.data.forecast.forecastday[this.props.day].day.mintemp_f,
                maxTemp: this.props.result.data.forecast.forecastday[this.props.day].day.maxtemp_f,
                precip: this.props.result.data.forecast.forecastday[this.props.day].day.totalprecip_in,
                moon: this.props.result.data.forecast.forecastday[this.props.day].day.moon_phase,                
            },
            expanded: false
        }
    }

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h3">
                            {this.state.weather.date}
                        </Typography>
                        <img src={this.state.weather.icon} alt="condition icon"></img>
                        <Typography gutterBottom variant="headline" component="h4">
                            High: {this.state.weather.maxTemp}&#176;
                            Low: {this.state.weather.minTemp}&#176;
                        </Typography>
                    </CardContent>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <img src={this.state.weather.moon} alt={this.state.weather.moon}></img>
                        <Typography gutterBottom variant="headline" component="h4">
                            Precipitation:<br/>
                            {this.state.weather.precip} in.
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Card>
            </div>
        );
    }
}

ForecastCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(ForecastCard));