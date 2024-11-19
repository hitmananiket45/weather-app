import React from 'react';
import { useTheme } from './ThemeContext';

function SearchBar({ city, setCity, forecastDays, setForecastDays }) {
    const { isDarkMode } = useTheme();

    return (
        <form className="flex flex-col w-full">
            <label htmlFor="citySearch" className={`mb-2 text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                <b>Enter City Name</b>
            </label>
            <input
                type="text"
                id="citySearch"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter City Name"
                className={`p-3 mb-2 rounded-md border-2 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-blue-300 text-gray-700'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                required
            />
            <label htmlFor="forecastDays" className={`mb-2 text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                <b>Select Forecast Duration</b>
            </label>
            <select
                id="forecastDays"
                value={forecastDays}
                onChange={(e) => setForecastDays(e.target.value)}
                className={`mb-2 p-3 rounded-md border-2 ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-blue-300 text-gray-700'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
                <option value={3}>3 Days</option>
                <option value={7}>7 Days</option>
                <option value={14}>14 Days</option>
            </select>
        </form>
    );
}

export default SearchBar;
