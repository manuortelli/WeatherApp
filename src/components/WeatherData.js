import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = () => (
   <div>
    <WeatherTemperature 
        temperature={10} 
        weatherState={''}
    />    
    <WeatherExtraInfo 
        humidity={80} 
        wind ={"24"}
    />
    </div> 
);

export default WeatherData;