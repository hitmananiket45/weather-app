import React from 'react';
import { useTheme } from './ThemeContext';

function WeatherCard({ weather }) {
    const { isDarkMode } = useTheme();

    return (
        <div className={`weather-card p-6 mt-4 rounded-lg shadow-lg text-center ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white bg-opacity-20'}`}>
            <h2 className="text-2xl font-bold">{weather.city}</h2>
            <img src={weather.icon} alt={weather.description} className="mx-auto my-2" />
            <p className="text-xl">{weather.temperature} °C</p>
            <p className="italic text-lg">{weather.description}</p>
            
            <div className="mt-4">
                <h3 className="text-lg font-semibold">Day Forecast</h3>
                <ul className="space-y-2 mt-2">
                    {weather.forecast.map((day, index) => (
                        <li key={index} className={`p-2 ${isDarkMode ? 'bg-gray-800' : 'bg-blue-600'} bg-opacity-50 rounded-lg flex flex-col items-center md:flex-row justify-between`}>
                            <div className="text-center md:text-left">
                                <p className="font-semibold">{day.date}</p>
                                <p>Max: {day.maxTemp} °C, Min: {day.minTemp} °C</p>
                                <p>{day.condition}</p>
                            </div>
                            <img src={day.icon} alt={day.condition} className="w-12 h-12 mt-2 md:mt-0 md:ml-4" />
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-4">
                <h3 className="text-lg font-semibold">Hourly Forecast (Today)</h3>
                <ul className="hourly-forecast mt-2">
                    {weather.forecast[0].hourly.map((hour, index) => (
                        <li key={index} className={`p-2 ${isDarkMode ? 'bg-gray-800' : 'bg-blue-500'} bg-opacity-50 rounded-lg flex flex-col items-center`}>
                            <p className="font-semibold">{hour.time}</p>
                            <img src={hour.icon} alt={hour.condition} className="w-8 h-8" />
                            <p>{hour.temp} °C</p>
                            <p>{hour.condition}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default WeatherCard;
