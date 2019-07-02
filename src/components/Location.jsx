import React from 'react';
const Location = (props) => {
    // Destructuring - ES6
    // const city = props.city;
    // With destructuring:
    const { city } = props;

    return (    
        <div>
            <h1>{city}</h1>
        </div>
    );
}; // Cuado se usan parentesis es porque es lo que retorna la funcion, en llaves se necesita la palabra reservada return
export default Location;