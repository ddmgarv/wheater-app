import React from 'react';
const WeatherExtraInfo = ({ humidity, wind}) => (
    <div>
        {/* Template string */}
        <span>{`${humidity} % - `}</span>
        <span>{`${wind} viento`}</span>
    </div>
);
export default WeatherExtraInfo;