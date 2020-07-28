import React from 'react';
import PropTypes from 'prop-types';

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

Location.propTypes = {
    city: PropTypes.string.isRequired,
}


export default Location;