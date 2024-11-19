import React from 'react';
import WeatherCard from './WeatherCard';

const WeatherDisplay = ({ loading, error, weather }) => {
    if (loading) {
        return (
            <div className="text-center mt-4">
                <div className="loader"></div>
                <p className="text-lg">Loading weather data...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-message">
                <p>{error}</p>
            </div>
        );
    }

    if (!weather) {
        return null;
    }

    return (
        <div>
            <WeatherCard weather={weather} />
        </div>
    );
};

export default WeatherDisplay;
