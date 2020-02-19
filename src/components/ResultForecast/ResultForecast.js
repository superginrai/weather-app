import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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

class ForecastCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            weather: {
                date: (this.props.result.data.forecast.forecastday[this.props.day].date).slice(5),
                icon: this.props.result.data.forecast.forecastday[this.props.day].day.condition.icon,
                minTemp: this.props.result.data.forecast.forecastday[this.props.day].day.mintemp_f,
                maxTemp: this.props.result.data.forecast.forecastday[this.props.day].day.maxtemp_f,
                
            }
        }
    }

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
                </Card>
            </div>
        );
    }
}

ForecastCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(ForecastCard));