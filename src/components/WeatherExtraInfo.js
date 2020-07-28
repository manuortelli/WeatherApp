import React from 'react';

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div>
        <span>{`${humidity}% - `}</span>
        <span>{`${wind} ms`}</span>
    </div>
);

export default WeatherExtraInfo;