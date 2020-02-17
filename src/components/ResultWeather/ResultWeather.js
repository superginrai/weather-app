import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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
                

                // image_url: 'images/vitaLove.jpg',
                // genre_id: this.props.result.genres[0],
                // description: this.props.result.summary,
                // complete: false,
                // sealed: false,
            }
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardMedia
                        // className={classes.media}
                        // image={this.state.game.image_url}
                        // title={this.state.game.summary}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {this.state.weather.location}, {this.state.weather.region}
                        </Typography>
                        <img src={this.state.weather.icon} alt="condition icon"></img>
                        <Typography gutterBottom variant="headline" component="h4">
                            {this.state.weather.condition}
                        </Typography>
                        <Typography gutterBottom variant="headline" component="h3">
                            {this.state.weather.temp}&#176;
                        </Typography>
                        <Typography gutterBottom variant="headline" component="h4">
                            High: {this.state.weather.maxTemp}&#176;
                            Low: {this.state.weather.minTemp}&#176;
                        </Typography>
                        <CardActions>
                            {/* <Button onClick={this.props.addNewGame(this.state.game)} variant="fab" color="primary" className={classes.button}>
                                <AddIcon />
                            </Button> */}
                            {/* Add this game to your collection */}
                        </CardActions>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

WeatherCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(WeatherCard));