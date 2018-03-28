var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-centered">About</h1>
            <p>This is a weather application built with React.</p>
            
            <p>Here are some of the tools used in building the app:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> - The Open Weather Map API was used to retrieve location-specific weather data.
                </li>
            </ul>
        </div>
    );
}

module.exports = About;