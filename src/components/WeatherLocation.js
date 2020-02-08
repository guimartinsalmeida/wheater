import React from 'react';
import Location from './Location'
import WeatherData from './WetherData'
const WeatherLocation = () => (
    <div>
        <Location city= {'CDMX'}></Location>
        <WeatherData></WeatherData>

    </div>
    
);

export default WeatherLocation;