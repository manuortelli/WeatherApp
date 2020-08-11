import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import PropTypes from 'prop-types';

//? Importamos las constantes para q no haya margen de error a la hora de elegir que enviar al componente
//? Por ej: si enviamos una que no está declarada nos saltará error de una.
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../../constants/Weathers'

import './styles.css';

const WeatherData = ({ data: { temperature, wind, weatherState, humidity } }) => (
   <div className="weatherDataCont">
    <WeatherTemperature 
        temperature={temperature} 
        weatherState={weatherState}
    />    
    <WeatherExtraInfo 
        humidity={humidity} 
        wind ={wind}
    />
    </div> 
);

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
    })
};

export default WeatherData;