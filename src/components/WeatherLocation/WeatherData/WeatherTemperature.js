import React from 'react';
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types';
import { CLOUD, SUN, RAIN, SNOW, CLOUDY, WINDY } from '../../../constants/Weathers';
import './styles.css';

const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy"
}

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];

    const sizeIcon="4x";

    if (icon) 
        return <WeatherIcons className="wIcon" name={icon} size={sizeIcon}/>
    else 
        return <WeatherIcons className="wIcon" name="day-sunny" size={sizeIcon}/>
}

const WeatherTemperature = ({ temperature, weatherState }) => (
<div className="weatherTemperatureCont">
    {
        getWeatherIcon(weatherState)
    }
    <span className="temperature">{`${temperature} `}</span>
    <span className="temperatureType">{`C°`}</span>
</div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired, 
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;