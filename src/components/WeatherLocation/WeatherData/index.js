import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

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

const WeatherData = () => (
   <div className="weatherDataCont">
    <WeatherTemperature 
        temperature={20} 
        weatherState={SUN}
    />    
    <WeatherExtraInfo 
        humidity={80} 
        wind ={"24"}
    />
    </div> 
);

export default WeatherData;