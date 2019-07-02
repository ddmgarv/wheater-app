import React from 'react'; // Importar react para poder usarlo
import Location from './Location';
import WeatherData from './WeatherData';
const WeatherLocation = () => (
    <div>
        <Location city={"La Plata"}></Location>
        <WeatherData></WeatherData>
    </div>
);// Cuado se usan parentesis es porque es lo que retorna la funcion, en llaves se necesita la palabra reservada return
export default WeatherLocation; // Permite que este disponible 