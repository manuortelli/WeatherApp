//?Hay que importar React para poder usarlo dentro del archivo
import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';


//Esto solo es un componente funcional, es el componente mas sencillo
//Es una constante con una función, no más.
const WeatherLocation = () => (
    <div>
        <Location city={"Saladillo"}/>
        <WeatherData/>
    </div>
)


//Se exporta para que este disponible para "todo el mundo"
export default WeatherLocation;