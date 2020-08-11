//?Hay que importar React para poder usarlo dentro del archivo
import React, { Component } from 'react';
//?Convert-units es una libreria para convertir unidades.
import convert from 'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css'
import {
    SUN,
} from './../../constants/Weathers';


const location = "Saladillo, ar";
const api_key = "4f9715fa265f746d98649c1264f84310";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const apiWeather = `${url_base_weather}?q=${location}&appid=${api_key}`

const data = {
    temperature: 2,
    weatherState: SUN,
    humidity: 10,
    wind: "10"
}




//Esto solo es un componente funcional, es el componente mas sencillo
//Es una constante con una función, no más.
class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: "Buenos Aires",
            data: data,
        };
    }


    //Funcion para cambiar la temperatura de Kelvin a Celcius, se podria haber hecho desde la api :D
    getTemp = ( kelvin ) => {
        return Number(convert(kelvin).from("K").to("C").toFixed(0));

    }

    getWeatherState = (weather_data) => {
        return SUN;
    }
    
    
    getData = (weather_data) => {
        const { name }  = weather_data;
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState  = this.getWeatherState(weather_data);
        const temperature = this.getTemp(temp);
        const data={
            name,
            humidity,
            temperature,
            weatherState,
            wind: `${speed} m/s`,
        }

        return data;
    }

    //Promises, 
    handleUpdateCLick = () => {
        fetch(apiWeather).then( resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = this.getData(data);
            console.log(newWeather);
            this.setState({
                data: newWeather,
                city: newWeather.name
            });
           
        });
       
    }
 

    render() {

        //EM6 destructuring de this.state, BUENICHIMOO
        const { city, data } = this.state
        return (
            <div className="weatherLocationCont">
                <Location city={city} />
                <WeatherData data={data} />
                <button onClick={this.handleUpdateCLick}>Actualizar</button>
            </div>
        )
    }


}


//Se exporta para que este disponible para "todo el mundo"
export default WeatherLocation;