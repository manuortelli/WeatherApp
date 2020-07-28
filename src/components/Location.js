import React from 'react';


//La locación llega por parametros 
//La city que llega es por props, hacemos destructuring 
//para que nos quede en pocas lineas
//Se podría hacer const { city } = props
//pero es mas facil así.
const Location = ({ city }) => (
    <div>
        <h1>
            {city}
        </h1>
    </div>
);

export default Location;