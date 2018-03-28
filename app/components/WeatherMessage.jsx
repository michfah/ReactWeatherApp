var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return (
        <h4 className="text-center">Right now, it's {temp}&#8451;
        in {location}.</h4>
    )
}

module.exports = WeatherMessage;